const express = require('express');
const app = express();

//Permite que o valor do post seja recebido no req.body
app.use(express.urlencoded({ extended: true }));

//    rota   param.  queryStrings
// /profiles/12345?campanha=googleads&nome_campanha=seila

app.get('/', (req, res) => {
    res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="nome">
  <button>Enviar</button>
  </form>
  `);
});

app.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.query);
    res.send(req.query.nome);
});

app.post('/', (req, res) => {
    console.log(req.body);                   // mesmo nome da "name" definida no input
    res.send(`O que voce enviou foi: ${req.body.nome}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
