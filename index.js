const express =  require('express');
const server = express();
const dotenv = require('dotenv');

dotenv.config()
const port = process.env.PORT ||  5000;

server.get("/", (req, res) => {
    res.send("EHK Mobile API")
})




server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})