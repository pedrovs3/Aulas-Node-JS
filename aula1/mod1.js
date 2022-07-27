class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;

const nome = 'Pedro';
const sobrenome = 'Henrique';

module.exports = {
  Pessoa, nome, sobrenome
}