const { retrieveAddresses, retrieveManyAddresses, changeAddress, removeAddress } = require("../database/prisma");

const getAddresses = async (req, res) => {
    const addresses = await retrieveAddresses()
    if (addresses === null) {
        res.status(500).send('Cannot get addresses')
    }
    res.status(200).json(addresses)
}

const selectAddressesByEmail = async (req, res) => {
    const filteredAddresses = await retrieveManyAddresses(req.params.email);
    if (filteredAddresses === false) {
        res.status(500).send("An error occured while fetching the addresses");
    }
    res.status(200).json(filteredAddresses);
}


const updateAddress = async (req, res) => {
    if (await changeAddress(req.params.id, req.body) === false) {
        res.status(500).send('An error occured while updating the datas')
    }
    res.status(200).send('Address updated')
}

/* const deleteAddress = async (req, res) => {
    if (await removeAddress(req.params.id) === false) {
        res.status(500).send('An error occured while deleting the datas')
    }
    res.status(200).send('Address deleted')
} */

module.exports = {
    getAddresses,
    selectAddressesByEmail,
    updateAddress
};
