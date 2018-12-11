import scrapy
import time
import random
import string


class imdb_spider(scrapy.Spider):
    name = "imdb_spider"
    start_urls = [
        'http://www.imdb.com/search/title?release_date=1980-01-01,2018-01-01&title_type=feature&user_rating=5.0,10'
    ]
    imdb_home = 'http://www.imdb.com'

    def parse(self, response):
        movie_hrefs = [self.imdb_home+x for x in response.selector.xpath(
            '//h3[@class="lister-item-header"]/a/@href').extract()]
        next_page = response.selector.xpath(
            '//a[@ref-marker="adv_nxt"]/@href').extract()
        print movie_hrefs
        for movie in movie_hrefs:
            yield scrapy.Request(movie, callback=self.parse_movie)
            time.sleep(random.randint(2, 4))
        if next_page:
            yield scrapy.Request(self.imdb_home+next_page[0], callback=self.parse)

    def parse_movie(self, response):
        title = ''.join(list(filter(lambda x: x in string.printable, response.xpath(
            '//div[@class="title_wrapper"]/h1/text()').extract_first().strip())))
        datePublished = response.xpath(
            '//div[@class="subtext"]/a[@title="See more release dates"]/text()').extract_first()
        summary = response.selector.xpath(
            '//div[@class="summary_text"]/text()').extract_first()
        genres = response.xpath(
            '//div[@class="subtext"]/a[not(@title="See more release dates")]/text()').extract()
        creators = response.xpath(
            "//span[@itemprop='creator']//span[@itemprop='name']/text()").extract()
        casts = response.xpath(
            "//td[@itemprop='actor']//span[@itemprop='name']/text()").extract()
        time = response.xpath("//time[@datetime]/text()").extract()[-1]
        rating = response.xpath(
            "//div[@class='ratingValue']//span[@itemprop='ratingValue']/text()").extract_first()
        country = response.xpath(
            "//div[h4[text() = 'Country:']]/a/text()").extract()
        language = response.xpath(
            "//div[h4[text() = 'Language:']]/a/text()").extract()
        poster = response.xpath(
            '//div[@class="poster"]//img/@src').extract_first()
        yield {'title': title,
               'datePublished': datePublished,
               'summary': normalize_string(summary),
               'genres': genres,
               'creators': creators,
               'casts': casts,
               'time': normalize_integer(time),
               'rating': normalized_float(rating),
               'country': country,
               'languages': language,
               'poster': poster}


def normalized_float(num):
    return float(num)


def normalize_string(s):
    return s.lstrip().rstrip()


def normalize_integer(num):
    return int(filter(lambda x: x.isdigit(), num))
