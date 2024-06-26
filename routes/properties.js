const express = require('express');
const { getProperties, addProperty, getProperty, updateProperty, deleteProperty, selectPropertiesByEmail, makeWishlist } = require('../controllers/properties');
const router = express.Router()


router.route("/")
.get(getProperties) // Reserved to Admin profiles 
.post(addProperty)

router.route("/:id")
.get(getProperty)
.put(updateProperty)
.delete(deleteProperty)

router.route("/filter/:email")
.get(selectPropertiesByEmail)

router.route("/wishlist/:id")
.put(makeWishlist)

module.exports = router;
