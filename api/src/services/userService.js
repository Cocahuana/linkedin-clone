const { User } = require("../db.js");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");




const userService = {
    signUp: async (req, res) => {
        const { email, password } = req.body
        try {
            const hashedPassword = await bcrypt.hashSync(password, 10)
            await User.create({
                email,
                password: hashedPassword
            })
            res.status(201).json({msg: "User created successfully"})
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: "Internal server error"})
        }
    }
}

module.exports = userService