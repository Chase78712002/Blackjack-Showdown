const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

module.exports = () => {
  router.get("/", (req, res) => {
    res.send('User root!');
    return;
  })
}