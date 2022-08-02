exports.paginaInicial = (req, res) => {
  console.log(req.session.usuario);
  //req.flash('info', 'olá mundo'); // há flashMessages info, error e success
  //req.session.usuario = { nome: 'Pedro', logado: true };
  console.log(req.flash('info'))
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body.cliente);
  return;
};
