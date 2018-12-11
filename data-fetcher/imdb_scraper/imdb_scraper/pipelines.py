# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html

from elasticsearch_dsl.document import DocType
from elasticsearch_dsl.analysis import token_filter, analyzer
from elasticsearch_dsl.field import Text, Date, Keyword, Integer, Float, Completion
from elasticsearch_dsl import Index
from elasticsearch import Elasticsearch

es = Elasticsearch()

ngram_filter = token_filter('ngram_filter',
                            type='nGram',
                            min_gram=1,
                            max_gram=20)

ngram_analyzer = analyzer('ngram_analyzer',
                          type='custom',
                          tokenizer='whitespace',
                          filter=[
                              'lowercase',
                              'asciifolding',
                              ngram_filter
                          ])


class ImdbscraperPipeline(object):
    def __init__(self):
        movies = Index('imdb', using=es)
        movies.doc_type(Movie)
        movies.delete(ignore=404)
        movies.create()

    def process_item(self, item, spider):
        movie = Movie()
        movie.title = item['title']
        movie.summary = item['summary']
        movie.datePublished = item['datePublished']
        movie.genres = item['genres']
        movie.creators = item['creators']
        movie.casts = item['casts']
        movie.time = item['time']
        movie.rating = item['rating']
        movie.countries = item['country']
        movie.languages = item['languages']
        movie.poster = item['poster']
        movie.plot_keywords = item['plot_keywords']
        movie.suggest = [item['title']] + item['casts'] + item['creators']
        movie.save(using=es)
        return item


class Movie(DocType):
    title = Text(fields={'raw': {'type': 'keyword'}})
    summary = Text()
    datePublished = Date()
    creators = Keyword(multi=True)
    genres = Keyword(multi=True)
    casts = Keyword(multi=True)
    time = Integer()
    countries = Keyword(multi=True)
    summary = Text()
    plot_keywords = Keyword(multi=True)
    languages = Keyword(multi=True)
    rating = Float()
    poster = Keyword()
    suggest = Completion(analyzer=ngram_analyzer,
                         search_analyzer=analyzer('standard'))

    class Meta:
        index = 'imdb'
