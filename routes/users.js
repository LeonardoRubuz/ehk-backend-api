const express = require('express');
const { getUsers, addUser, getUser } = require('../controllers/users');
const router = express.Router()


router.route("/")
.get(getUsers)
.post(addUser)

router.route('/:id')
.get(getUser)
.put()
.delete()

module.exports = router;
