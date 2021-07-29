const express = require('express');
const router = express.Router();
const controller = require("./users.controller");

// /users/
router.get("/users/", controller.getUsers)

module.exports = router;

