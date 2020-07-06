const {Router} = require("express")
const {check,validationResult} = require("express-validator")
const bcrypt = require("bcrypt")
const config = require("config")
const jwt = require("jsonwebtoken")
const User = require("../models/User")
const Card = require("../models/Card")
const route = Router()

route.post(
  "/register",
  [
    check('email', "Invalid email").isEmail(),
    check('password', "Minimum password length 6 characters").isLength({min:6}),
    check('name', "Enter your name").exists()

  ], 
  async (req,res)=>{

    try {
      const errors = validationResult(req) 

      if(!errors.isEmpty()){
        return res.status(400).json({message:"Некорректные данные при регистрации", errors:errors.array()})
      }

      const {email,password,name} = req.body
      let candidate = await User.findOne({email})

      if(candidate){
        return res.status(400).json({message:"Такой емаил уже используется"})
      }
      const hashedPass= await bcrypt.hash(password, 12)
      const user = new User({password:hashedPass, name, email})
      const card = new Card({owner:user._id})

      await user.save()
      await card.save()
      res.status(201).json({message:"Пользователь создан"})
    } catch (e) {
      console.log(e)
      res.status(500).json({message:e.message})
    }
})

route.post(
  "/login",
  [
    check("email", "Invalid email").isEmail().normalizeEmail(),
    check("password", "Invalid password").exists()
  ],  
  async (req,res)=>{
    try {
      const errors = validationResult(req) 
        if(!errors.isEmpty()){
          return res.status(400).json({errors:errors.array()})
        }
        const {email, password} = req.body
        let user = await User.findOne({email})

        if(!user){
      // !!! НЕ СТОИТ КИДАТЬ КОНКРЕТНЫЕ ДАННЫЕ В РЕАЛЬНОМ ПРОЕКТЕ ПО ПОНЯТНЫМ ПРИЧИНАМ   

          return res.status(400).json({message:"Uncurrent email"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
          return res.status(401).json({message : "Uncurrent password"})
        }

        const token = jwt.sign(
          {userId:user.id},
          config.get("jwtSecret"),
          {
            expiresIn:"24h"
          }
        )

        res.status(201).json({message:"Добро пожаловать",token,name:user.name, userId:user.id, email:user.email})

    } catch (e) {
      res.status(500).json({message:e.message})
    }
})




module.exports = route