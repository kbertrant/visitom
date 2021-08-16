const path = require('path');

const express = require('express');

const homeController = require('../controllers/home');
const siteController = require('../controllers/site');

const router = express.Router();

router.get('/', homeController.getIndex);

router.get('/site/sites', siteController.getSites);
router.get('/site/add-site', siteController.getAddSite);
router.post('/site/add-site', siteController.postAddSite);
router.post('/site/edit-site', siteController.postEditSite);
router.get('/site/edit-site/:siteId', siteController.getEditSite);
router.post('/site/delete-site', siteController.postDeleteSite);

module.exports = router;