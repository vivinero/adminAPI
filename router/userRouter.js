const express = require("express");
const router = express.Router()

const {home, createUser, getOne, getAll, updateUser, makeUserAdmin} = require("../controller/userController")

router.get("/", home)
router.post("/createuser", createUser)
router.get("/getone", getOne)
router.get("/getall", getAll)
router.put("/updateuser/:ide/:id", updateUser)
router.put("/updateadmin/:id", makeUserAdmin)


module.exports = router

