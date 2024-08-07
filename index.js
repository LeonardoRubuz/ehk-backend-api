const express =  require('express');
const server = express();
const cors = require('cors')
const dotenv = require('dotenv');
const passport = require('passport');
const addressRouter = require('./routes/addresses')
const propertyRouter = require('./routes/properties')
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const { retrieveUserByEmail } = require('./database/prisma');
const LocalStrategy = require('./lib/config/passport');
const helmet = require('helmet');

// Configurations
dotenv.config()
const port = process.env.PORT ||  5000;
const host = process.env.HOST ||  "127.0.0.1";
passport.use(LocalStrategy)
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (email, done) => {
    const user = await retrieveUserByEmail(email);
    if (user) {
        done(null, user)
    }
    done({ message : "L'utilisateur n'existe pas" }, false)
})



// Middlewares
server.use(cors()) 
server.use(express.json({limit : '50mb'})); // Parse incoming requests data as JSON
server.use(express.urlencoded({limit : '50mb'}))
server.use(passport.initialize()) //  Pass the authentication middleware to our application
server.use(helmet(
    {
        xFrameOptions : {action : "deny"},
    }
)) 


server.get("/", (req, res) => {
    res.send("EHK Mobile API for mobile applications")
})

// Routers
server.use(authRouter)
server.use("/addresses", addressRouter)
server.use("/properties", propertyRouter)
server.use("/users", userRouter)



server.listen(port, host,  () => {
    console.log(`Server listening on http://${host}:${port}`);
})