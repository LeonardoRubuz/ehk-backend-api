const express = require('express');
const { getAddresses } = require('../controllers/addresses');
const router = express.Router()


router.route("/")
.get(getAddresses)

router.route("/:id")



module.exports = router;
