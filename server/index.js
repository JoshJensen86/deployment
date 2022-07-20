const path = require('path')
const express = require ('express')

const app = express()

const port = process.env.PORT || 4005

app.get ('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.js'))
  })

  