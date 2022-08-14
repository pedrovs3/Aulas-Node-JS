const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController')

// Exemplo de Middleware

// function meuMiddleware(req, res, next) {
//   req.session = { nome: 'Pedro', sobrenome: 'Vieria' };
//   console.log();
//   console.log('Passei no seu middleware');
//   console.log();
//   // passa para a proxima execuçao (middleware)
//   next();
// }

// Rotas da home
route.get('/', homeController.paginaInicial);
// route.get('/', meuMiddleware, homeController.paginaInicial, (req, res, next) => {
//   console.log();
//   console.log('ainda estou aqui');
//   console.log(`'ultimoMiddleware'Olha o que tem na req.session.nome = ${req.session.nome}`)
// });

route.post('/', homeController.trataPost);

//Rotas de contato
route.get('/contato', contatoController.paginaInicial)


// Exportando as routes definidas nesse arquivo para serem acessadas em server.js
module.exports = route;