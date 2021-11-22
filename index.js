const app = require('express')()//para nao precisar fazer duas vezes
const consign = require('consign')
const db = require('./config/db')
const mongoose = require('mongoose')
const port = "3000"
require('./config/mongodb')
//node tem o conceito de midleware que fica retornando coisas, isso é visto em rotas para autenticacao
app.db = db
app.mongoose = mongoose

consign()//injeção de dependencia das funções no objeto app
    .include('./config/passport.js')//autenticação
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./schedule')
    .then('./config/routes.js')
    .into(app)//colocada aqui

app.listen(port, () => {
    console.log(`Backend node executando em port ${port}`)
}) 