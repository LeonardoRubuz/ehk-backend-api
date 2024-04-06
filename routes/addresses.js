const express = require('express');
const { getAddresses, selectAddressesByEmail, updateAddress, deleteAddress } = require('../controllers/addresses');
const router = express.Router()


router.route("/")
.get(getAddresses)

router.route("/:id")
.put(updateAddress)
//.delete(deleteAddress)

router.route("/filter/:email")
.get(selectAddressesByEmail)



module.exports = router;
