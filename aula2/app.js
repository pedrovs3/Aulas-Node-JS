// const multiplicacao = require('./mod1');

// console.log(multiplicacao(2, 2));

const Cachorro = require('./mod1');

const dalmata = new Cachorro('dalmata');
dalmata.latir();

const path = require('path');
console.log(path.resolve(__dirname))