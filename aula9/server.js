const express = require('express');
const app = express();

// importando as rotas do arquivo routes.js
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
// "Falando para o express utilizar as routes(rotas)"
app.use(routes);

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
