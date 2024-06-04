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

/**
 * Get a particular user
 * @param {*} id the  id of the user we want to get information about
 * @returns User object 
 */
const retrieveUser = async (id) => {
    try {
        const user = await prisma.user.findUnique({
            where : {
                id : parseInt(id)
            }
        })
        if (!user) {
            return null
        }
        return user
    } catch (error) {
        console.log(error);
        return false
    }
}

const retrieveUserByEmail = async (email) => {
    try {
        const user = await prisma.user.findUnique({
            where : {
                email : email
            }
        })
        if (!user) {
            return null
        }
        return user
    } catch (error) {
        console.log(error);
        return false
    }
}

/**
 * Update one or many values of a stored user record
 * @param {*} id 
 * @param {*} user 
 * @returns boolean
 */
const changeUser = async (id, user) => {
    try {
        await prisma.user.update({
            where : {
                id : parseInt(id)
            },
            data : {
                ...user
            }
        })
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}

/**
 * Delete a user record
 * @param {*} id 
 * @returns 
 */
const removeUser = async (id) => {
    try {
        await prisma.user.delete({
            where : {
                id : parseInt(id)
            }
        })
        return true
    } catch (error) {
        console.log(error);
        return false
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
 * Looks up for properties owned by the given email
 * @param {*} ownerEmail 
 * @returns List of filtered properties
 */
const retrieveManyProperties = async (ownerEmail) => {
    try {
        const properties = await prisma.property.findMany({
            where : {
                userEmail :  ownerEmail
            }
        })
        return properties
    } catch (error) {
        console.log(error);
        return false
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

/**
 * Changes a state of a property's waitlist and adds the property's id
 * into the user's wishlist
 * @param {*} changes 
 * @returns 
 */
const setWishlist = async (id, changes) => {
    try {
        await prisma.property.update({
            where : {
                id : id
            },
            data : {
                waitlist : {
                    push : changes.userEmail
                }
            }
        })
        await prisma.user.update({
            where : {
                email : changes.userEmail
            },
            data : {
                wishlist : {
                    push : id
                }
            }
        })
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}

/**
 * Delete a property
 * @param {*} id 
 * @returns A boolean
 */
const removeProperty = async (id) => {
    try {
        await prisma.property.delete({
            where : {
                id : id
            }
        })
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}




// Addresses requests handlers
/**
 * Get all stored addresses
 */
const retrieveAddresses = async () => {
    try {
        const addresses =  await prisma.address.findMany()
        return addresses
    } catch (error) {
        console.log(error);
        return null
    }
}

/**
 * Looks up for addresses owned by the given email
 * @param {*} ownerEmail 
 * @returns List of filtered addresses
 */
const retrieveManyAddresses = async (ownerEmail) => {
    try {
        const addresses = await prisma.address.findMany({
            where : {
                property : {    
                    userEmail : ownerEmail
                }
            }
        })
        return addresses
    } catch (error) {
        console.log(error);
        return false
    }
}

/**
 * Update an address record values
 * @param {*} addressId 
 * @returns Boolean
 */
const changeAddress = async (addressId, newValues) => {
    try {
        await prisma.address.update({
            where : {
                id : parseInt(addressId)
            },
            data : {
                ...newValues
            }
        })
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}

/**
 * Deletes an address record
 * @param {*} addressId 
 * @returns 
 */
/* const removeAddress = async (addressId) => {
    try {
        await prisma.address.delete({
            where : {
                id : parseInt(addressId)
            }
        })
        return true
    } catch (error) {
        console.log(error);
        return false
    }
} */

module.exports = {
    createUser, createProperty, retrieveUser,
    retrieveUsers, retrieveProperties, retrieveAddresses,
    changeProperty, removeProperty, changeUser, removeUser,
    retrieveManyProperties, retrieveManyAddresses,
    changeAddress, retrieveUserByEmail,
    setWishlist
};
