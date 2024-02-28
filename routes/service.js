const express = require("express");
const router = express.Router();
const contactForm = require('../controllers/contact-controller')


router.route('/service').get(contactForm)



module.exports = router;