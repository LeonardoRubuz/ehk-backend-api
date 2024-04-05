const express = require('express');
const { getProperties, addProperty, getProperty, updateProperty, deleteProperty, selectPropertiesByEmail } = require('../controllers/properties');
const router = express.Router()


router.route("/")
.get(getProperties)
.post(addProperty)

router.route("/:id")
.get(getProperty)
.put(updateProperty)
.delete(deleteProperty)

router.route("/filter/:email")
.get(selectPropertiesByEmail)

module.exports = router;
