const config = require('../knexfile.js')
const knex = require('knex')(config)

//knex.migrate.latest([config])//pode desabilitar. ele cria as tabelas automaticamente
module.exports = knex