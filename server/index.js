const express = require('express')
const db = require('./queries')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Backend with Express Node and Postgres' })
  })

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

  app.get('/getPosts', db.getPosts)
  app.post('/createPost', db.createPost)
