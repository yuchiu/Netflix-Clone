import scrapy
import time
import random


class imdb_spider(scrapy.Spider):
    name = "imdb_spider"
    start_urls = [
        'http://www.imdb.com/search/title?release_date=1980-01-01,2018-01-01&title_type=feature&user_rating=5.0,10'
    ]
    imdb_home = 'http://www.imdb.com'

    def parse(self, response):
        movie_hrefs = [self.imdb_home+x for x in response.selector.xpath(
            '//h3[@class="lister-item-header"]/a/@href').extract()]
        print movie_hrefs
