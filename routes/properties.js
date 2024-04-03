const express = require('express');
const { getProperties, addProperty } = require('../controllers/properties');
const router = express.Router()


router.route("/")
.get(getProperties)
.post(addProperty)


module.exports = router;
