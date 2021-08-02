const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('../../client/public/index.html');
})

module.exports = router;