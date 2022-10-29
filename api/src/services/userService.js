const { User } = require("../db.js");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require("../models/user.js");
const { SECRET_KEY } = process.env



const userService = {
    signUp: async (req, res) => {
        const { email, password } = req.body
        try {
            const hashedPassword = await bcrypt.hashSync(password, 10)
            await User.create({
                email,
                password: [hashedPassword]
            })
            res.status(201).json({msg: "User created successfully"})
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: "Internal server error"})
        }
    },
    loggin: async (req, res) => {
        const { email, password } = req.body
        try {
            const findUser = await User.findOne({ where: { email: email }})
            if(!findUser){
                return res.status(404).json({ msg: "The user is not registered" })
            }
            if(findUser.blacklist === true){
                return res.status(401).json({ msg: "This account was suspended undefinedly" })
            }
            const hashedPassword = findUser.password.filter((pass) => bcrypt.compareSync(password, pass))
            if(hashedPassword.length > 0){
                const userData = {
                    _id: findUser._id,
                    names: findUser.names,
                    surnames: findUser.surnames,
                    email: findUser.email,
                    isAdmin: findUser.isAdmin,
                    blacklist: findUser.blacklist
                }
                findUser.password = undefined
                const jwToken = jwt.sign({...userData}, SECRET_KEY, {
                    expiresIn: 60 * 60 * 24,
                })
                return res.status(200).json({msgData: {status: "success", msg: `Welcome ${findUser.names + " " + findUser.surnames}`}, userData: findUser, token: jwToken });
            } else {
                return res.status(401).json({ msgData: {status: "error", msg: "Invalid password"}})
            }

        } catch (error) {
            console.log(error)
            res.status(500).json({msg: "Internal server error"})
        }
    }
}

module.exports = userService