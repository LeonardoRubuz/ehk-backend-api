const express = require('express');
const { getProperties, addProperty, getProperty, updateProperty } = require('../controllers/properties');
const router = express.Router()


router.route("/")
.get(getProperties)
.post(addProperty)

router.route("/:id")
.get(getProperty)
.put(updateProperty)
.delete()

module.exports = router;
