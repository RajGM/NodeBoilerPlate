const express = require('express');
const router = new express.Router();

const relationshipsController = require('./app/controllers/relationships');
router.get("/api/relationships",relationshipsController.relationships);

const frontendController = require('./app/controllers/frontend');
router
    .get("/",frontendController.home)
    .get("/contactus",frontendController.contactUs)

module.exports = router;
