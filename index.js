const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Ai papai')
})

app.get('/teste', function (req, res) {
    res.send('trocou de rota')
  })


app.listen(3333)