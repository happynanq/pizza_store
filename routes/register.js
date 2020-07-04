const {Router} = require("express")
const {check,validationResult} = require("express-validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../../reductuin_link/models/User")
const Card = require("../models/Card")
const route = Router()

route.post(
  "/register",
  [
    check("email").isEmail().normalizeEmail(),
    check("password").isLength({min:6})
  ],  
  async (req,res)=>{
    try {
      const errors = validationResult(req) 
      if(errors){
        return res.status(422).json({errors:errors.array()})
      }

      let candidate = await User.findOne({email})
      if(candidate){
        return res.status(400).json({message:"Такой емаил уже используется"})
      }
      const hashedPass= await bcrypt.hash(password, 12)

      const user = new User({password:hashedPass, name, email})
      const card = new Card()

      await user.save()
      await card.save()
      
      res.status(201).json({message:"Пользователь создан"})
    } catch (e) {
      res.status(500).json({message:e.message})
    }
})

route.post(
  "/login",
  [
    check("email").isEmail().normalizeEmail(),
    check("password").exists()
  ],  
  async (req,res)=>{
    try {
      const errors = validationResult(req) 
        if(errors){
          return res.status(422).json({errors:errors.array()})
        }

        let user = await User.findOne({email})
        if(!candidate){
          return res.status(400).json({message:"Такой емаил уже используется"})
        }

        const token = jwt.sign({
          userId:user.id
        })

        res.status(201).json({message:"Добро пожаловать",token, userId:user.id})

    } catch (error) {
      res.status(500).json({message:e.message})
    }
})




module.exports = route