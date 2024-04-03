const express = require('express');
const { getAddresses } = require('../controllers/addresses');
const router = express.Router()


router.route("/")
.get(getAddresses)


module.exports = router;
