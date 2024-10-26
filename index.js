// Não é mais tudo!!!
const express = require('express')
const routes = require('./src/routes/pessoa')
const database = require('./src/config/database')

// Instanciar um express
const app = express()

// Middleware Json - aceita json no body
app.use(express.json())

// Adicionar as rotas ao express
app.use(routes)
const PORT = 3000

database.db
  .sync({ force: false })
  .then((_) => {
    console.info("Conexão com o banco estabelecida com sucesso!")
    app.listen(PORT, () => {
      console.info('Servidor rodando na porta ${PORT}')
    })
    .catch((e) => {
      console.error('Não foi possível estabelecer conexão com o banco de dados.')
    })
  })


// Inicializar o servidor
//app.listen(3000, () => {
//  console.info("Servidor rodando na porta 3000")
//})

//OU

// Variavel com a porta
//const PORT = 3000

//Inicializar o servidor
//app.listen..... ta no celular a foto do restoi