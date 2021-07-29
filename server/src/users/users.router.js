const express = require('express');
const router = express.Router();
const controller = require("./users.controller");

router.route("/")
    .get(controller.getUsers)
    .post(controller.createUser)

// router.put("/login", controller.login)
// router.put("/register", controller.register)
// router.put("/logout", controller.logout)


module.exports = router;
