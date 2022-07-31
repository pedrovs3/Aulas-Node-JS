// Chamando o framework express
// Arquivo separado para rotas do servidor
const express = require('express');
// Constante criada com o express.Router, que sera responsavel por "tratar as rotas" 
const route = express.Router();

// Importando controller's
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController')

// A rota agora é chamada pela constante route ao inves de app.
// chamando a funçao homeController que vem de outro modulo(Controller)
// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rotas de contato
route.get('/contato', contatoController.paginaInicial)


// Exportando as routes definidas nesse arquivo para serem acessadas em server.js
module.exports = route;