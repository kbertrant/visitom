


const isLoggedIn = false;

exports.getIndex = (req, res, next) => {
        req.session.isLoggedIn = true;
        res.render('home', {
        pageTitle: 'Accueil',
        path: '/'
    });
    
  };