const { Router } = require("express");
const passport = require("../../../config/passport.js");
const router = Router();
const { signUp, loggin, verifyToken, verifyEmail } = require("../../services/userService.js");


router.route("/signUp").post(signUp);

router.route("/loggin").get(loggin);

router.route("/verifyToken").get(passport.authenticate("jwt", {session: false}), verifyToken);

router.route("/verifyEmail/:id").get(verifyEmail);





module.exports = router;
