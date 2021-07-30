const express = require('express');
const router = express.Router();

// test route for jwt
router.get("/isUserAuth", verifyToken, (req, res) => {
  res.send("Verified token!Yay!")
})