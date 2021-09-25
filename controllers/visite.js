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
  console.log(req.body);
    const visit_doc_id = req.body.visit_doc_id;
    const doc_id_expiration = req.body.doc_id_expiration;
    const visit_fname = req.body.visit_fname;
    const visit_lname = req.body.visit_lname;
    const visite_type = req.body.visite_type;
    const arrival_time = req.body.arrival_time;
    const visite_company = req.body.visite_company;
    const visite_concern = req.body.visite_concern;
    const visite_comment = req.body.visite_comment;
    
    const visiteur = Visiteur.create({
        visit_doc_id: visit_doc_id,
        doc_id_expiration: doc_id_expiration,
        visit_fname: visit_fname,
        visit_lname: visit_lname
    });
    // visiteur
    //   .save()
    //   .then(result => {
    //     //console.log(result);
    //     console.log('Visiteur ajoutée');
    //     res.redirect('/visite/visites');
    //   })
    //   .catch(err => {
    //     console.log(err);
    // });
    console.log(visiteur);

    const visite = new Visite({
      visite_type: visite_type,
      visite_company: visite_company,
      arrival_time: arrival_time,
      visite_concern: visite_concern,
      visite_comment: visite_comment,
      visiteurId: visiteur.id
    });
    visite
    .save()
    .then(result =>{
      //console.log(result);
      console.log('visite ajoutée');
    })
    .catch(err => {
      console.log(err);
    })

  };

  exports.getEditVisite = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
      return res.redirect('/');
    }
    const visiteId = req.params.visiteId;
    Visite.findByPk(visiteId)
      .then(visite => {
        if (!visite) {
          return res.redirect('/');
        }
        res.render('visite/edit-visite', {
          pageTitle: 'Modifier Site',
          path: '/visite/edit-visite',
          editing: editMode,
          visite: visite
        });
      })
      .catch(err => console.log(err));
  };

  exports.postEditVisite = (req, res, next) => {
    
    const siteId = req.body.siteId;
    const updatedsite_name = req.body.site_name;
    const updatedsite_active = req.body.site_active;
  
    Visite.findByPk(visiteId)
      .then(visite => {
          
        visite.site_name = updatedsite_name;
        visite.site_active = updatedsite_active;
        return visite.save();
      })
      .then(result => {
        console.log('Visite modifiée !');
        res.redirect('/visite/visites');
      })
      .catch(err => console.log(err));
  };
  
  exports.getVisites = (req, res, next) => {
    Visite.findAll({include: Visiteur})
      .then(visites => {
        console.log(visites);
        res.render('visite/visites', {
          visites: visites,
          pageTitle: 'Toutes les visites',
          path: '/visite/visites'
        });
      })
      .catch(err => console.log(err));
  };

  exports.postDeleteVisite = (req, res, next) => {
    const visiteId = req.body.visiteId;
    
    Visite.findByPk(visiteId)
    .then(visite =>{
        console.log(visite);
        return visite.destroy();
    })
      .then(() => {
        console.log('Visite supprimé');
        res.redirect('/visite/visites');
      })
      .catch(err => console.log(err));
  };