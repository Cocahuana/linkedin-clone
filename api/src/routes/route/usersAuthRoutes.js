const { Router } = require("express");
const passport = require("../../../config/passport.js");
const router = Router();
const { signUp } = require("../../services/userService.js");


router.route("/signUp").post(signUp);





module.exports = router
