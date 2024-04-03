const express =  require('express');
const server = express();
const dotenv = require('dotenv');
const passport = require('passport');
const addressRouter = require('./routes/addresses')
const propertyRouter = require('./routes/properties')
const userRouter = require('./routes/users')

dotenv.config()
const port = process.env.PORT ||  5000;

// Middlewares 
server.use(express.json()); // Parse incoming requests data as JSON
//server.use(passport.initialize()) //  Pass the authentication middleware to our application


server.get("/", (req, res) => {
    res.send("EHK Mobile API")
})

// Routers
server.use("/addresses", addressRouter)
server.use("/properties", propertyRouter)
server.use("/users", userRouter)



server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})