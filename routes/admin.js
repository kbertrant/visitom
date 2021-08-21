const path = require('path');

const express = require('express');

const homeController = require('../controllers/home');
const siteController = require('../controllers/site');
const visiteController = require('../controllers/visite');

const router = express.Router();

router.get('/', homeController.getIndex);

router.get('/site/sites', siteController.getSites);
router.get('/site/add-site', siteController.getAddSite);
router.post('/site/add-site', siteController.postAddSite);
router.post('/site/edit-site', siteController.postEditSite);
router.get('/site/edit-site/:siteId', siteController.getEditSite);
router.post('/site/delete-site', siteController.postDeleteSite);

router.get('/visite/visites', visiteController.getVisites);
router.get('/visite/add-visite', visiteController.getAddVisite);
router.post('/visite/add-visite', visiteController.postAddVisite);
router.post('/visite/edit-visite', visiteController.postEditVisite);
router.get('/visite/edit-visite/:visiteId', visiteController.getEditVisite);
router.post('/visite/delete-visite', visiteController.postDeleteVisite);

module.exports = router;