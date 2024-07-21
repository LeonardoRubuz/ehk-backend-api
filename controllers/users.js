const { createUser, retrieveUsers, retrieveUser, changeUser, removeUser, retrieveUserByEmail } = require("../database/prisma");
const generateToken = require("../lib/generateToken");


const register = async (req, res) => {
    if (!await createUser(req.body)) {
        res.status(500).send("Internal server error")
    }
    const token = generateToken(req.body)
    const user = await retrieveUserByEmail(req.body.email)
    res.status(200).json({
        "token" : token,
        "user" : user
    })
}


const getUsers = async (req, res) => {
    const users = await retrieveUsers(null, req.query)
    if (users == []) {
        res.status(404).json({
            status : "Not Found",
            message : "There are no users in the database",
            datas : users
        })
    }
    res.status(200).json({
        status : "Success",
        datas : users
    });
}

const addUser = (req, res) => {
    if (!createUser(req.body)) {
        res.status(500).json({
            status : "Fail",
            message : 'Could not create user'
        })
    }
    res.status(201).json({
        status : "Success",
        message : 'User created successfully'
    })
}

const getUser = async (req, res) => {
    if (await retrieveUser(req.params.id) === null) {
        res.status(404).json({
            status : "Not Found",
            message : "No user found",
            datas : null
        })
    }
    if (await retrieveUser(req.params.id) === false) {
        res.status(500).json({
            status : "Fail",
            message : "Internal server error"
        })
    }
    res.status(200).json({
        status : "Success",
        datas : await retrieveUser(req.params.id)
    })
}


const updateUser = async (req, res) => {
    if (await changeUser(req.params.id, req.body) === false) {
        res.status(500).json({
            status : "Fail",
            message : "Internal server error"
        })
    }else {
       res.status(200).json({
        status : "Success",
        message : 'User updated successfully'
       }); 
    }
}

const deleteUser = async (req, res) => {
    if (!await removeUser(req.params.id)) {
        res.status(500).json({
            status : "Fail",
            message : "Error deleting the user"
        })
    }
    res.status(200).json({
        status : "Success",
        message : 'User deleted successfully'
       }); 
}

module.exports = {
    getUsers,
    addUser,
    getUser,
    updateUser,
    deleteUser,
    register
};
