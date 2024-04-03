const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')


const prisma = new PrismaClient


// User requests handlers

const createUser  = async (user) => {
    try {
        const hashedPassword = bcrypt.hashSync(user.password, 15)
        await prisma.user.create({
            data : {
                ...user,
                password : hashedPassword
            }
        })
        return true //Return  a boolean to indicate if the user was created or not
    } catch (error) {
        console.log(error);
        return false // Return  an error message in case of failure
    }
}



module.exports = {
    createUser
};
