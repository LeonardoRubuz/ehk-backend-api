const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { register } = require('../controllers/users');
const authRouter = express.Router();


authRouter
.post("/login", authMiddleware)
.post("/register", register)

module.exports = authRouter;
