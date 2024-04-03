const { createUser } = require("../database/prisma");

const getUsers = (req, res) => {
    res.status(200).send('All users');
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
