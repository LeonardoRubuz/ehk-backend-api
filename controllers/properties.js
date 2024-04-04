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

const getProperty = async (req, res) => {
    const property = await retrieveProperties(req.params.id);
    res.status(200).json(property)
}

module.exports = {
    getProperties,
    addProperty,
    getProperty
};
