const { retrievePropertyUserEmail } = require("../database/prisma");

const checkUserPrivilege = async (req, res, next) => {
    // Check if the request user email is the property's userEmail
    // or if request user role is Admin
    const savedUserEmail = await retrievePropertyUserEmail(req.user.email)
    console.log(req.user);
    
    if (req.user.email !== savedUserEmail) {
        res.status(403)
        .json({
            message: "Vous n'avez pas la permission d'accéder à cette ressource"
        })
    }
    else {
        return next();
    }

}

module.exports = checkUserPrivilege;