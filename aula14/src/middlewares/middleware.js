exports.middlewareGlobal = (req, res, next) => {
  // if(req.body.cliente) {
  //   req.body.cliente = req.body.cliente.replace('pedro', 'NAO USE PEDRO')
  //   console.log();
  //   console.log(`Vi que voce postou ${req.body.cliente}`)
  //   console.log();
  // }

  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};