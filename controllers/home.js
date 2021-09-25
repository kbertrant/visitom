


exports.getIndex = (req, res, next) => {
    res.render('home', {
    pageTitle: 'Accueil',
    path: '/'
  });
};

exports.getWelcome = (req, res, next) => {
  res.render('main', {
  pageTitle: 'welcome',
  path: '/'
});
};