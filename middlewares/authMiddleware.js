const passport = require("passport")

const authMiddleware = (req, res, next) => {
    passport.authenticate("local", (err, user) => {
        if (err) {
            return next(err)
        }
        if (!user) {
            return res.status(401).json({error : "Incorrect ids"})
        }
        
    })
}