# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html

from elasticsearch_dsl.document import DocType
from elasticsearch_dsl.field import Text, Date, Keyword, Integer, Float, Completion
from elasticsearch_dsl import Index
from elasticsearch import Elasticsearch

es = Elasticsearch()


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
        movie.save(using=es)
        return item


class Movie(DocType):
    title = Text(fields={'raw': {'type': 'keyword'}})
    summary = Text()
    datePublished = Text()
    creators = Keyword(multi=True)
    genres = Keyword(multi=True)
    casts = Keyword(multi=True)
    time = Integer()
    countries = Keyword(multi=True)
    languages = Keyword(multi=True)
    rating = Float()
    poster = Keyword()

    class Meta:
        index = 'imdb'
