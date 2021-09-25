const path = require('path');
const {body} = require('express-validator/check');
const express = require('express');

const homeController = require('../controllers/home');
const siteController = require('../controllers/site');
const visiteController = require('../controllers/visite');
const visiteurController = require('../controllers/visiteur');
const router = express.Router();

router.get('/', homeController.getIndex);
router.get('/welcome', homeController.getWelcome);
router.get('/site/sites', siteController.getSites);
router.get('/site/add-site', siteController.getAddSite);
router.post('/site/add-site',
[
    body('site_name')
    .isAlphanumeric()
    .isLength({trim:3})
    .trim(),
    body('site_status').isBoolean()
], 
siteController.postAddSite);
router.post('/site/edit-site',[
    body('site_name')
    .isAlphanumeric()
    .isLength({trim:3})
    .trim(),
    body('site_status').isBoolean()
],
 siteController.postEditSite);
router.get('/site/edit-site/:siteId', siteController.getEditSite);
router.post('/site/delete-site', siteController.postDeleteSite);

router.get('/visite/visites', visiteController.getVisites);
router.get('/visite/add-visite', visiteController.getAddVisite);
router.post('/visite/add-visite', visiteController.postAddVisite);
router.post('/visite/edit-visite', visiteController.postEditVisite);
router.get('/visite/edit-visite/:visiteId', visiteController.getEditVisite);
router.post('/visite/delete-visite', visiteController.postDeleteVisite);

router.get('/visiteur/visiteurs', visiteurController.getVisiteurs);
router.post('/visiteur/edit-visiteur', visiteurController.postEditVisiteur);
router.get('/visiteur/edit-visiteur/:visiteurId', visiteurController.getEditVisiteur);
router.post('/visiteur/delete-visiteur', visiteurController.postDeleteVisiteur);

module.exports = router;