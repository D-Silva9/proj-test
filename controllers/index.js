
//controla o routeamento
exports.index = function (req, res, next) {
  //index é um template, que está na view.
  //renderiza o conteúdo para a página
  res.render('index', { title: 'Express' });
}