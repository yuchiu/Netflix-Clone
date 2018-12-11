# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html

from elasticsearch_dsl.document import DocType
from elasticsearch_dsl.field import Text, Date
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
        movie.save(using=es)
        return item


class Movie(DocType):
    title = Text(fields={'raw': {'type': 'keyword'}})
    summary = Text()
    datePublished = Date()

    class Meta:
        index = 'imdb'
