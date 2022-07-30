const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

const pessoas = [
    { nome: 'João' },
    { nome: 'Luiz' },
    { nome: 'Pedro'},
    { nome: 'Eduardo'},
];

//Convertendo o obj pessoas para um JSON
const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
};

function renderizaDados(dados) {
  // Fazendo o JSON voltar a ser um obj JS
  dados = JSON.parse(dados);
  dados.forEach(val => console.log(val.nome));
};

leArquivo(caminhoArquivo);