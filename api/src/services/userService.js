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
            const uniqueString = crypto.randomBytes(15).toString("hex");
            const hashedPassword = await bcrypt.hashSync(password, 10)
            await User.create({
                email,
                password: [hashedPassword],
                uniqueString: uniqueString,
                from: ["signUp"]
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
    },
    verifyToken: async (req, res) => {
        try {
            if(req.user){
                const email = req.user.email
                const findUser = await User.findOne({ where: { email: email}})
                findUser.password = undefined
                return res.status(200).setHeader('Last-Modified', (new Date()).toUTCString()).json({ msgData: { status: "success", msg: `Welcome ${findUser.userName}`}, userData: findUser});
            } else {
                return res.status(400).json({ msgData: { status: "error", msg: "Token has expired"}});
            } 
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: "Internal server error"})
        }
    },
    verifyEmail: async (req, res) => {
        const { id } = req.params;
        try {
            const findUser = await User.findOne({ uniqueString: id })
            if(findUser){
                await findUser.update({isVerified: true});
                res.status(201).json({ msgData: { status: "success", msg: "Email verification completed. Thanks for register and be free to use our website!"} })
            } else {
                res.status(400).json({ msgData: { status: "error", msg: "Invalid verification code." }})
            }
        } catch (error) {
            res.status(500).json({ msgData: { status:"error", msg: "Internal Server Error"}});
        }
    }
}

module.exports = userService