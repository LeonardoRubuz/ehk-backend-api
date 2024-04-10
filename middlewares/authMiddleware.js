const passport = require("passport")
const generateToken = require("../lib/generateToken")

const authMiddleware = (req, res, next) => {
    passport.authenticate("local", (err, user) => {
        if (err) {
            return next(err)
        }
        if (!user) {
            return res.status(401).json({error : "Incorrect ids"})
        }
        generateToken(user);
        res.status(200).send('Connexion réussie')
    })(req, res, next)
}


module.exports = authMiddleware;
