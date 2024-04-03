const express = require('express');
const { getProperties } = require('../controllers/properties');
const router = express.Router()


router.route("/")
.get(getProperties)
.post()


module.exports = router;
