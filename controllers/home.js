


exports.getIndex = (req, res, next) => {
    
        res.render('home', {
        pageTitle: 'Accueil',
        path: '/'
    });
    
  };