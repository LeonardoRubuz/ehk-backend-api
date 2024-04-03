const { createProperty } = require("../database/prisma");

const getProperties = (req, res) => {
    res.status(200).send("All properties")
}

const addProperty = async (req, res) => {
    if (!await createProperty(req.body)) {
        res.status(500).send('Fail to create property');
    }else{
        res.status(201).send('Property successfully created')
    }
}


module.exports = {
    getProperties,
    addProperty
};
