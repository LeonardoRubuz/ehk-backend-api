const { createProperty, retrieveProperties, changeProperty, removeProperty, retrieveManyProperties, setWishlist } = require("../database/prisma");

const getProperties = async (req, res) => {
    const properties = await retrieveProperties(null, req.query)
    res.status(200).json({
        status : "Success",
        datas : properties
    })
}

const selectPropertiesByEmail = async (req, res) => {
    const filteredProperties = await retrieveManyProperties(req.params.email)
    if (filteredProperties === false) {
        res.status(500).send('An error occured while fetching the datas')
    }
    res.status(200).json(filteredProperties)
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

const makeWishlist = async (req, res) => {
    if ( !await setWishlist(req.params.id, req.body)) {
        res.status(500).send('Cannot set wishlist')
    }
    res.status(200).send('Wishlist updated')
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
    deleteProperty,
    selectPropertiesByEmail,
    makeWishlist
};
