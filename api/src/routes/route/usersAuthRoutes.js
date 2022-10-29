const { Router } = require("express");
const passport = require("../../../config/passport.js");
const router = Router();
const { signUp, loggin } = require("../../services/userService.js");


router.route("/signUp").post(signUp);

router.route("/loggin").get(loggin);





module.exports = router
