const Visiteur = require('../models/visiteur');

  exports.getEditVisiteur = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
      return res.redirect('/');
    }
    const visiteurId = req.params.visiteurId;
    Visiteur.findByPk(visiteurId)
      .then(visiteur => {
        if (!visiteur) {
          return res.redirect('/');
        }
        res.render('visiteur/edit-visiteur', {
          pageTitle: 'Modifier Visiteur',
          path: '/visiteur/edit-visiteur',
          editing: editMode,
          visiteur: visiteur
        });
      })
      .catch(err => console.log(err));
  };

  exports.postEditVisiteur = (req, res, next) => {
    
    const visiteurId = req.body.visiteurId;
    const updatedsite_name = req.body.site_name;
    const updatedsite_active = req.body.site_active;
  
    Visiteur.findByPk(visiteurId)
      .then(visiteur => {
          
        visiteur.site_name = updatedsite_name;
        visiteur.site_active = updatedsite_active;
        return visiteur.save();
      })
      .then(result => {
        console.log('Visiteur modifié !');
        res.redirect('/visiteur/visiteurs');
      })
      .catch(err => console.log(err));
  };
  
  exports.getVisiteurs = (req, res, next) => {
    Visiteur.findAll()
      .then(visiteurs => {
        console.log(visiteurs);
        res.render('visiteur/visiteurs', {
        visiteurs: visiteurs,
        pageTitle: 'Toutes les visiteurs',
        path: '/visiteur/visiteurs'
        });
      })
      .catch(err => console.log(err));
  };

  exports.postDeleteVisiteur = (req, res, next) => {
    const visiteurId = req.body.visiteurId;
    
    Visiteur.findByPk(visiteurId)
    .then(visiteur =>{
        console.log(visiteur);
        return visiteur.destroy();
    })
      .then(() => {
        console.log('Visiteur supprimé');
        res.redirect('/visiteur/visiteurs');
      })
      .catch(err => console.log(err));
  };