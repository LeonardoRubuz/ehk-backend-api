const bcrypt = require('bcrypt')
const local = require('passport-local')
const { retrieveUserByEmail } = require('../../database/prisma')


const LocalStrategy = new local.Strategy(
    { usernameField : "email", passwordField : "password" },
    async (email, password, done) => {
        try {
            const user = await retrieveUserByEmail(email)
            if (!user) {
                return done(null, false);
            }
            bcrypt.compare(password, user.email, (err, isMatch) => {
                if (err) {
                    return done(null, false, err);
                }
                if (!isMatch) {
                    return done(null, false, {message : 'Password incorrect'});
                }
                return done(null, user);
            })
        } catch (error) {
            res.status(500).send('Error');
        }
    }
)

module.exports = LocalStrategy;
