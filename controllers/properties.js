const { createProperty, retrieveProperties, changeProperty, retrieveProperty, removeProperty, retrieveManyProperties, setWishlist } = require("../database/prisma");

const getProperties = async (req, res) => {
    const properties = await retrieveProperties(req.query)
    res.status(200).json({
        status : "Success",
        datas : properties
    })
}

const selectPropertiesByEmail = async (req, res) => {
    const filteredProperties = await retrieveManyProperties(req.params.email)
    if (filteredProperties === false) {
        res.status(500).json({
            status : "Fail",
            message : 'An error occured while fetching the datas'
        })
    }
    res.status(200).json({
        status : "Success",
        datas : filteredProperties
    })
}

const addProperty = async (req, res) => {
    if (!await createProperty(req.body)) {
        res.status(500).json({
            status : "Fail",
            message : 'Fail to create property'
        });
    }else{
        res.status(201).json({
            status : "Fail",
            message : 'Property successfully created'
        })
    }
}

const getProperty = async (req, res) => {
    const property = await retrieveProperty(req.params.id);
    if (property === null) {
        res.status(404).json({
            status : "Not Found",
            message : "There is no property with this id in the database",
            datas : null
        })
    }
    res.status(200).json({
        status : "Success",
        datas : property
    })
}

const updateProperty = async (req, res) => {
    if (!await changeProperty(req.params.id, req.body)) {
        res.status(500).json({
            status :  "Fail",
            message : "Cannot update the property"
        })
    }
    res.status(200).json({
        status : "Fail",
        message : "The property has been updated"
    })
}

const makeWishlist = async (req, res) => {
    if ( !await setWishlist(req.params.id, req.body)) {
        res.status(500).json({
            status : 'Fail',
            message : 'Cannot set wishlist'
        })
    }
    res.status(200).json({
        status : "Success",
        message : 'Wishlist updated'
    })
}


const deleteProperty = async (req, res) => {
    if (!await removeProperty(req.params.id)) {
        res.status(500).json('Cannot delete the property')
    }
    res.status(200).json('The property has been deleted')
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
