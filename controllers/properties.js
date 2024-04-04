const { createProperty, retrieveProperties, changeProperty, removeProperty } = require("../database/prisma");

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

const updateProperty = async (req, res) => {
    if (!await changeProperty(req.params.id, req.body)) {
        res.status(500).send("Cannot update the property")
    }
    res.status(200).send("The property has been updated")
}

const deleteProperty = async (req, res) => {
    if (!await removeProperty(req.params.id)) {
        res.status(500).send('Cannot delete the property')
    }
    res.status(200).send('The property has been deleted')
}


module.exports = {
    getProperties,
    addProperty,
    getProperty,
    updateProperty,
    deleteProperty
};
