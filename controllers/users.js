const { createUser, retrieveUsers } = require("../database/prisma");

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




module.exports = {
    getUsers,
    addUser
};
