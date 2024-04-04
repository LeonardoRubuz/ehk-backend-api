const { retrieveAddresses } = require("../database/prisma");

const getAddresses = async (req, res) => {
    const addresses = await retrieveAddresses()
    if (addresses === null) {
        res.status(500).send('Cannot get addresses')
    }
    res.status(200).json(addresses)
}


module.exports = {
    getAddresses
};
