const { createUser, retrieveUsers, retrieveUser, changeUser, removeUser } = require("../database/prisma");

const getUsers = async (req, res) => {
    const users = await retrieveUsers()
    console.log(users);
    res.status(200).json(users);
}

const addUser = (req, res) => {
    if (!createUser(req.body)) {
        res.status(500).send('Could not create user')
    }
    res.status(201).send('User created successfully')
}

const getUser = async (req, res) => {
    if (await retrieveUser(req.params.id) === null) {
        res.status(404).send("No user found")
    }
    if (await retrieveUser(req.params.id) === false) {
        res.status(500).send("Server error")
    }
    res.status(200).json(await retrieveUser(req.params.id))
}


const updateUser = async (req, res) => {
    if (await changeUser(req.params.id, req.body) === false) {
        res.status(500).send('Server Error')
    }else {
       res.status(200).send('Updated Successfully'); 
    }
}

const deleteUser = async (req, res) => {
    if (!await removeUser(req.params.id)) {
        res.status(500).send('Error deleting the user');
    }
    res.status(200).send('User deleted successfully')
}

module.exports = {
    getUsers,
    addUser,
    getUser,
    updateUser,
    deleteUser
};
