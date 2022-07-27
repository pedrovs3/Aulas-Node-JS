const { Pessoa } = require("./mod1");
const mod1 = require("./mod1");
const axios = require("axios");

const p1 = new Pessoa("Pedro");
console.log(Pessoa);
console.log(mod1);

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(e => {
//     console.error(e)
//   })
