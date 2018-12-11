# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html

from elasticsearch_dsl.document import DocType
from elasticsearch_dsl.field import Text, Date, Keyword, Integer, Float, Completion
from elasticsearch_dsl import Index
from elasticsearch import Elasticsearch

es = Elasticsearch()


class ImdbScraperPipeline(object):
    def process_item(self, item, spider):
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

    class Meta:
        index = 'imdb'
