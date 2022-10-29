const { Router } = require("express");
const router = Router()
const { User } = require("../../db.js")

router.get("/users", async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Internal server error"})
    }
})


module.exports = router