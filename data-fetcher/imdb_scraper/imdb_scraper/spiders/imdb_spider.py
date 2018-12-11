import scrapy
import time
import random


class ImdbSpider(scrapy.Spider):
    name = 'imdb_spider'
    start_urls = [
        'http://www.imdb.com/search/title?release_date=1980-01-01,2018-01-01&title_type=feature&user_rating=5.0,10'
    ]
    imdbhome = 'http://www.imdb.com'

    def parse(self, response):
        movie_hrefs = [self.imdbhome+x for x in response.selector.xpath(
            '//h3[@class="lister-item-header"]/a/@href').extract()]
        next_page = response.selector.xpath(
            '//a[@ref-marker="adv_nxt"]/@href').extract()
        for movie in movie_hrefs:
            yield scrapy.Request(movie, callback=self.parse_movie)
            time.sleep(random.randint(2, 4))
        if next_page:
            yield scrapy.Request(self.imdbhome+next_page[0], callback=self.parse)

    def parse_movie(self, response):
        title = response.selector.xpath(
            '//h1[@itemprop="name"]/text()').extract_first()
        datePublished = response.selector.xpath(
            '//meta[@itemprop="datePublished"]/@content').extract_first()
        summary = response.selector.xpath(
            '//div[@class="summary_text"]/text()').extract_first()
        yield {'title': title,
               'datePublished': datePublished,
               'summary': summary}
