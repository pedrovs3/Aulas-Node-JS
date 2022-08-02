exports.paginaInicial = (req, res) => {
  console.log(req.session.usuario);
  req.flashMessage('info', 'olá mundo'); // há flashMessages info, error e success
  //req.session.usuario = { nome: 'Pedro', logado: true };
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body.cliente);
  return;
};
