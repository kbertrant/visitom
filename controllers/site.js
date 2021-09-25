const Site = require('../models/site');

exports.getAddSite = (req,res,next) => {
  //console.log(req.session.isLoggedIn); 
    res.render('site/edit-site',{
        pageTitle: 'Ajouter un site',
        path:'/site/add-site',
        editing:false
    });
};

exports.postAddSite = (req, res, next) => {
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
        console.log('Site ajouté');
        //req.session.data = true;
        res.redirect('/site/add-site');
      })
      .catch(err => {
        console.log(err);
      });
  };

  exports.getEditSite = (req, res, next) => {
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
        res.render('site/edit-site', {
          pageTitle: 'Modifier Site',
          path: '/site/edit-site',
          editing: editMode,
          site: site
        });
      })
      .catch(err => console.log(err));
  };

  exports.postEditSite = (req, res, next) => {
    
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
        console.log('Site modifié !');
        res.redirect('/site/sites');
      })
      .catch(err => console.log(err));
  };
  
  exports.getSites = (req, res, next) => {
    Site.findAll()
      .then(sites => {
        //console.log(sites);
        res.render('site/sites', {
          sites: sites,
          pageTitle: 'Tous les sites',
          path: '/site/sites'
        });
      })
      .catch(err => console.log(err));
  };

  exports.postDeleteSite = (req, res, next) => {
    const siteId = req.body.siteId;
    
    Site.findByPk(siteId)
    .then(site =>{
        console.log(site);
        return site.destroy();
    })
      .then(() => {
        console.log('Site supprimé');
        res.redirect('/site/sites');
      })
      .catch(err => console.log(err));
  };