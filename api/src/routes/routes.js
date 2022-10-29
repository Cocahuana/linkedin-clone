const { Router } = require('express');
const router = Router();

//IMPORTS
const userAuthRoutes = require("./route/usersAuthRoutes")

//ROUTES
router.use("/users", userAuthRoutes)




//TEST
const test = require("./route/testRoutes")

router.use("/test", test)


module.exports = router