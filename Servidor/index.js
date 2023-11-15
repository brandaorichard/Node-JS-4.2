// Cria porta do servidor e configura rotas

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log('Requisicao recebida');
  res.status(200).send([{ obj: 1}, { obj: 2 }])
})

app.get('/xablau1', (req, res) => {
  res.status(200).send(['xablau-monocentrico', 'xablau monogamico'])
}) 

app.listen(3005)

console.log('xablau');