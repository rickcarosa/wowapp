require('dotenv').config();
const express = require('express')
    , controller = require('./controller')
    , app = express()
    , cors = require('cors')


app.use(express.json());
app.use(cors());

const {
    SERVER_PORT
} = process.env

app.use(express.static(`${__dirname}/../build`))

app.listen(SERVER_PORT, () => console.log(`World of Warcraft`)) 