# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class ImdbScraperItem(scrapy.Item):
    movie_id = scrapy.Field()
    title = scrapy.Field()

    film_rating = scrapy.Field()
    duration = scrapy.Field()
    genre = scrapy.Field()
    release_date = scrapy.Field()
    release_date_unix_time = scrapy.Field()

    imdb_ratingValue = scrapy.Field()
    imdb_bestRating = scrapy.Field()
    imdb_ratingCount = scrapy.Field()

    description = scrapy.Field()
    storyline = scrapy.Field()

    director = scrapy.Field()
    creator = scrapy.Field()
    writer = scrapy.Field()
    stars = scrapy.Field()
    poster = scrapy.Field()
    trailer_img = scrapy.Field()

    taglines = scrapy.Field()

    url = scrapy.Field()
    req_headers = scrapy.Field()
    res_headers = scrapy.Field()
    #body = scrapy.Field()

    def __repr__(self):
        pass
