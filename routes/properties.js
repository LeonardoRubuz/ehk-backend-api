const express = require('express');
const { getProperties, addProperty, getProperty } = require('../controllers/properties');
const router = express.Router()


router.route("/")
.get(getProperties)
.post(addProperty)

router.route("/:id")
.get(getProperty)
.put()
.delete()

module.exports = router;
