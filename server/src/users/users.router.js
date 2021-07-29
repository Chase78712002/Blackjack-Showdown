const express = require('express');
const router = express.Router();
const controller = require("./users.controller");

router.get("/", controller.getUsers)

// router.put("/login", controller.login)
// router.put("/register", controller.register)
// router.put("/logout", controller.logout)



module.exports = router;
