const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' });
};

// const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');

// // chamando o 'metodo' de escrever arquivos, 
// // sendo passado o caminho aonde o arquivo será
// // criado, o conteudo do arquivo e uma flag (flag: 'w') sobrescreve algo que ja tenha no arquivo
// // (flag: 'a') adiciona coisas no arquivo sem deletar o conteudo presente.
// fs.writeFile(caminhoArquivo, 'Frase 1\n', { flag: 'a' });
