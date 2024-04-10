const jwt = require('jsonwebtoken')

const generateToken = (user) => {
    const payload = {
        email : user.email,
        lastname : user.lastname,
        role : user.role
    }
    jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn : Date.now() + 240 * 60 * 60 * 1000
    })
    return null
}


module.exports = generateToken;
