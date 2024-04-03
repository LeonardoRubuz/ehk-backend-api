const { createProperty, retrieveProperties } = require("../database/prisma");

const getProperties = async (req, res) => {
    const properties = await retrieveProperties()
    res.status(200).json(properties)
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
