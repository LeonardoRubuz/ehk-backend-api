const { retrieveAddresses } = require("../database/prisma");

const getAddresses = async (req, res) => {
    const addresses = await retrieveAddresses()
    if (addresses === null) {
        res.status(500).send('Cannot get addresses')
    }
    res.status(200).json(addresses)
}

const selectAddressesByEmail = async (req, res) => {
    const filteredAddresses = await retrieveAddresses(req.params.email);
    if (filteredAddresses === false) {
        res.status(500).send("An error occured while fetching the addresses");
    }
    res.status(200).json(filteredAddresses);
}

module.exports = {
    getAddresses,
    selectAddressesByEmail
};
