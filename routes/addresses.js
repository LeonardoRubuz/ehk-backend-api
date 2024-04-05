const express = require('express');
const { getAddresses, selectAddressesByEmail } = require('../controllers/addresses');
const router = express.Router()


router.route("/")
.get(getAddresses)

router.route("/filter/:email")
.get(selectAddressesByEmail)



module.exports = router;
