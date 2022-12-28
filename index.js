const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Ai papai')
})

app.listen(3333)