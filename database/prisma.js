const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');


const prisma = new PrismaClient;


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

/**
 * Returns a list of all users by the given role 
 * @param {*} role If no role is provided, returns all users
 * @returns 
 */
const retrieveUsers = async (role) => {
    try {
        if (role && role==="Public") {
            const users = await prisma.user.findMany({
                select : {role : role}
            });
            return users;
        } 
        if (role && role==="Admin") {
            const users = await prisma.user.findMany({
                select : {role : role}
            });
            return users;
        }
        const users = await prisma.user.findMany()
        return users
    } catch (error) {
        console.log(error);
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


/**
 * Returns  all properties 
 * @param id  - if provided returns only one property otherwise it will return all the properties
 */
const retrieveProperties = async (id) => {
    try {
        if (id) {
            const property = await prisma.property.findUnique({
                where : {
                    id : id
                }
            });
            return property
        }
        const properties = await prisma.property.findMany()
        return properties
    } catch (error) {
        console.log(error);
    }
}

/**
 * Change attributes of a property record
 * @param {*} id The identifier of the property to change
 * @param {*} property The object of changed values
 * @returns A boolean
 */
const changeProperty = async (id, property) => {
    try {
        await prisma.property.update({
            where : {
                id : id
            },
            data : {
                ...property

            }
        })
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}


module.exports = {
    createUser, createProperty,
    retrieveUsers, retrieveProperties,
    changeProperty
};
