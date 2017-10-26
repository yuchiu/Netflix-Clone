const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config/config')
const routes = require('./routes/')

const app = express()
routes(app)

app
    .set("views", __dirname + "/views")
    .set("view engine", "hjs")
    .use(bodyParser.json())
    .use(cors())

app.listen(config.port)