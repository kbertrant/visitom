const Visite = require('../models/visite');
const Visiteur = require('../models/visiteur');

exports.getAddVisite = (req,res,next) => {
  console.log('Ajouter une visite');
    res.render('visite/edit-visite',{
        pageTitle: 'Ajouter une visite',
        path:'/visite/add-visite',
        editing:false
    });
};

exports.postAddVisite = (req, res, next) => {
    const site_name = req.body.site_name;
    const site_active = req.body.site_active;
    
    const site = new Site({
        site_name: site_name,
        site_active: site_active
    });
    site
      .save()
      .then(result => {
        console.log(result);
        console.log('Visite ajoutée');
        res.redirect('/visite/visites');
      })
      .catch(err => {
        console.log(err);
      });
  };

  exports.getEditVisite = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
      return res.redirect('/');
    }
    const siteId = req.params.siteId;
    Site.findByPk(siteId)
      .then(site => {
        if (!site) {
          return res.redirect('/');
        }
        res.render('visite/edit-visite', {
          pageTitle: 'Modifier Site',
          path: '/visite/edit-visite',
          editing: editMode,
          site: site
        });
      })
      .catch(err => console.log(err));
  };

  exports.postEditVisite = (req, res, next) => {
    
    const siteId = req.body.siteId;
    const updatedsite_name = req.body.site_name;
    const updatedsite_active = req.body.site_active;
  
    Site.findByPk(siteId)
      .then(site => {
          
        site.site_name = updatedsite_name;
        site.site_active = updatedsite_active;
        return site.save();
      })
      .then(result => {
        console.log('Visite modifiée !');
        res.redirect('/visite/visites');
      })
      .catch(err => console.log(err));
  };
  
  exports.getVisites = (req, res, next) => {
    Visite.findAll()
      .then(visites => {
        //console.log(visites);
        res.render('visite/visites', {
          visites: visites,
          pageTitle: 'Toutes les visites',
          path: '/visite/visites'
        });
      })
      .catch(err => console.log(err));
  };

  exports.postDeleteVisite = (req, res, next) => {
    const siteId = req.body.siteId;
    
    Site.findByPk(siteId)
    .then(site =>{
        console.log(site);
        return site.destroy();
    })
      .then(() => {
        console.log('Visite supprimé');
        res.redirect('/visite/visites');
      })
      .catch(err => console.log(err));
  };