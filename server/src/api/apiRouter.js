const express = require('express');
const router = express.Router();
const verifyToken = require('../auth/verifyToken')
// test route for jwt
router.get("/isUserAuth", verifyToken, (req, res) => {
  res.send("Verified token!Yay!")
})

module.exports = router;
