# Netflix Clone

- **Checkout branch "React-View" for frontend only Netflix Clone with React Redux**

---

## Quick Links

[Demo](#demo)

- [Live Site Demo](#live-site-demo)
- [Video Demo](#video-demo)

[Tech Stack](#tech-stack)

[Implementation Hightlights](#Implementation-Hightlights)

- [User Stories](#user-stories)
- [Current Plans for Expansion](#current-plans-for-expansion)
- [Future Plans for Expansion](#future-plans-for-expansion)

[Getting Started](#getting-started)

- [Prerequisites](#prerequisites)

  - [Tools & Versions](#tools-&-versions)

- [Building Data Pipeline](#building-data-pipeline)

  - [Data Fetcher](#data-fetcher)

- [Serving Application](#serving-application)

  - [Movie Service](#movie-service)
  - [User Service](#user-service)
  - [Web Server](#web-server)
  - [Web Client](#web-client)

[Deployment](#deployment)

[Author](#author)

[Acknowledgments](#acknowledgments)

---

## Demo

### Live Site Demo

Demo: [Link](http://yuchiu-netflix.surge.sh/)

### Video Demo

![demogif](https://github.com/yuchiu/netflix-clone/blob/master/netflix-clone-optimize-gif-demo.gif)

---

## Tech Stack

- [React](https://github.com/facebook/react) ∙ [Redux](https://github.com/reduxjs/redux)
  - web client & client data management
- [Node.js](https://github.com/nodejs) ∙ [Expressjs](https://github.com/expressjs/express) ∙ [Jayson](https://github.com/tedeh/jayson)
  - web server & services in service oriented architecure
- [Python](https://github.com/python) ∙ [Scrapy](https://github.com/scrapy/scrapy)
  - web scraper, data pipeline
- [ElasticSearch](https://github.com/elastic/elasticsearch)
  - persisted database for movies
- [Postgres](https://github.com/postgres/postgres) ∙ [Sequelize](https://github.com/sequelize/sequelize)
  - persisted database for users
- [Kibana](https://github.com/elastic/kibana)
  - ElasticSearch analytics data visualization

---

## Implementation Highlights

- single page application web client with React & Redux
- service oriented architecure backend
- REST for client server communication, JSON RPC for inter service communication
- scrape raw movie data from imdb
- provides processed imdb movies data with our movie service API
- persisted ElasticSearch for movie's database for optimized searching capability
- PostgreSQL for user's database

### User Stories

- users can register and log in to their account
- landing page has collections of movie for recommendations
- users can search for movies
- users can browse search result by pages
- users can select and view details of a movie
- users can see his/her history of browsed movie
- users can add or remove movie to his/her bookmark

### Current Plans for Expansion

- containerize services and database with Docker

### Future Plans for Expansion

- seperate search into its own service that utilize ElasticSearch, use MongoDB as persisted database for movie-service and sync data between ElasticSearch and MongoDB
- Machine Learning recommendation system?
- Machine Learning classification for recommended movie collections?
- scrape and stream videos for movies?

---

## Getting Started

### Prerequisites

**!important** .env file is required for setting up environment variables for this project  
 an example of .env file is located at root directory

#### Tools & Versions

| Tools         | Versions |
| ------------- | -------- |
| npm           | 6.1.0    |
| pip           | 9.0.1    |
| nodejs        | 10.7.0   |
| python        | 2.7      |
| elasticsearch | 6.3.1    |
| postgres      | 10.5     |

### Building Data Pipeline

#### Data Fetcher

- install dependencies

```terminal
pip install -r requirements.txt
```

- start scraper pipeline for fetching raw data from IMDB, process and store to ElasticSearch

```terminal
cd data-pipeline/imdb_scraper
scrapy crawl "imdb_spider"
```

### Serving Application

#### Movie Service

- dependent on ElasticSearch as data source

- install dependencies & start Movie-Service

```terminal
cd movie-service
npm install
npm start
```

Application will be serving on http://localhost:3230

#### User Service

- dependent on PostgreSQL as data source

- install dependencies & start User-Service

```terminal
cd user-service
npm install
npm start
```

Application will be serving on http://localhost:3130

#### Web Server

- install dependencies & start Web-Server

```terminal
cd web-server
npm install
npm start
```

Application will be serving on http://localhost:3030

#### Web Client

- install dependencies & start application

```terminal
cd web-client
npm install
npm start
```

Application will be serving on http://localhost:3000

---

## Deployment

- Not setup yet

---

## Author

- Yu Chiu

---

## License

This project is licensed under the MIT License - see the LICENSE file for details

---

## Acknowledgments

- Not setup yet

---
