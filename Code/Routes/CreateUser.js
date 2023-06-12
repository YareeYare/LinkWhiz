const express = require("express");
const { CreateUser , LoginUser} = require("../Controllers/user");

const router = express.Router();

router.post("/", CreateUser);
router.post("/login", LoginUser);

module.exports = router;
