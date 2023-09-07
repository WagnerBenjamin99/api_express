require('dotenv').config()

const Server = require('../myApp/models/server')

const server = new Server()

server.listen()