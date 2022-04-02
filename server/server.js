const path = require('path')
const express = require('express')

const campRoutes = require('./routes/campsites')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

server.use('/api/v1/campsites', campRoutes)

// for browser router (react-router-dom)
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
