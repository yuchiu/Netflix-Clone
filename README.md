# Netflix Clone

- **Checkout branch "React-View" for web-client only Netflix Clone with React Redux**
- **Currently under rework for full-stack expansion**

---

## Quick Links

[Tech Stack](#tech-stack)

[Objectives](#objectives)

- [Current Plan for Full-Stack Expansions](#current-plan-for-full-stack-expansions)
- [Future Expansions](#future-expansions)

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
- [Docker](https://github.com/docker)
  - containerization

---

## Objectives

### Current Plan for Full-Stack Expansions

- service oriented architecure
- REST for client service communication, JSON RPC for inter service communication
- scrape raw data from imdb
- provides processed movies data with our movie service API
- persisted ElasticSearch for movie's database for optimized search functionality
- display stats with Kibana
- containerize services and database with Docker

### Future Expansions

- MongoDB as persisted database for movie-service, create search-service with ElasticSearch that sync MongoDB's data?
- Message Queue for inter service communications?
- Machine Learning recommendation system?
- Machine Learning classification for movie collections?
- scrape videos for movies?
- stream videos?
- rating system?
- payment system?
- continuous integration and continuous deployment pipeline?

---

## Getting Started

### Prerequisites

**!important** .env file is required for setting up environment variables for this project  
 an example of .env file is located at root directory

#### Tools & Versions

| Tools                                  | Versions   |
| -------------------------------------- | ---------- |
| npm                                    | 6.1.0      |
| pip                                    | 9.0.1      |
| nodejs                                 | 10.7.0     |
| python                                 | 2.7        |
| elasticsearch                          | 6.3.1      |
| postgres                               | 10.5       |
| **Optional for production deployment** |
| docker                                 | 18.06.1-ce |
| docker-compose                         | 1.22.0     |

### Building Data Pipeline

#### Data Fetcher

- install dependencies

```terminal
pip install -r requirements.txt
```

- start scraper pipeline for fetching raw data from IMDB, process and store to ElasticSearch

```terminal
cd imdb_scraper
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

- Not set up yet

---

## Author

- Yu Chiu

---

## License

This project is licensed under the MIT License - see the LICENSE file for details

---

## Acknowledgments

- Not set up yet

---
