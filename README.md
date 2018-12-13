# Netflix Clone

- **Checkout branch "React-View" for web-client only Netflix Clone with React Redux**
- Currently under rework for full-stack expansion

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

- React ∙ Redux
  - Web Client & Client Data Management
- Nodejs ∙ Expressjs
  - Web Server & Services in SOA Architecture
- Python ∙ Scrapy
  - Web Scraper, data processing
- ElasticSearch ∙ MongoDB
  - Persisted Data for Movies and Users
- Kibana
  - ElasticSearch stats data visualization

---

## Objectives

### Current Plan for Full-Stack Expansions

- service oriented architecure
- REST for client service communication, JSON RPC for inter service communication
- scrape raw data from imdb
- provides processed movies data with our movie service API
- persisted ElasticSearch for movie's database
- display stats with Kibana

### Future Expansions

- microservices?
- message queue for all inter services communications?
- recommendation system?
- scrape videos for movies?
- stream videos?
- rating system?
- payment system?

---

## Getting Started

### Prerequisites

**!important** .env file is required for setting up environment variables for this project  
 an example of .env file is located at root directory

#### Tools & Versions

| Tools         | Versions    |
| ------------- | ----------- |
| npm           | 6.1.0       |
| pip           | 9.0.1       |
| nodejs        | 10.7.0      |
| python        | 2.7         |
| elasticsearch | 6.3.1       |
| mongodb       | cloud(mLab) |

### Building Data Pipeline

#### Data Fetcher

- install dependencies

```terminal
pip install -r requirements.txt
```

- fetch movie data from IMDB

```terminal
cd imdb_scraper
scrapy crawl "imdb_spider"
```

### Serving Application

#### Movie Service

- install dependencies & start Movie-Service

```terminal
cd movie-service
npm install
npm start
```

Application will be serving on http://localhost:3230

#### User Service

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
