const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')


const prisma = new PrismaClient


// User requests handlers
/**
 * Create a new user record by hashing the given user.password property
 * @param user The user object retrieved in as the req.body
 * @returns  A boolean to confirms whether or not the database query went well
 */
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




// Properties  requests handlers
/**
 * Create a new property whether its an Apartment, House
 * or empty Field
 * @param property -- The property object retrieved in as the req.body
 */
const createProperty = async (property) => {
    try {
        await prisma.property.create({
            data : {
                ...property,
                owner : {
                    connect : {
                        email : property.owner
                    }
                },
                address : {
                    create : {
                        ...property.address
                    }
                }
            }
        })
        return true;
    } catch (error) {
        console.log(error);
        return false; 
    }
}


module.exports = {
    createUser, createProperty
};
