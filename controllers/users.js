const { createUser, retrieveUsers, retrieveUser } = require("../database/prisma");

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


module.exports = {
    getUsers,
    addUser,
    getUser
};
