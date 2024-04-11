const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const authRouter = express.Router();


authRouter
.post("/login", authMiddleware)


module.exports = authRouter;
