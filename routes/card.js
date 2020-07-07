const {Router} = require("express")
const {check,validationResult} = require("express-validator")
const bcrypt = require("bcrypt")
const config = require("config")
const jwt = require("jsonwebtoken")
const User = require("../models/User")
const Card = require("../models/Card")
const Item = require("../models/Item")
const route = Router()

route.post(
  "/addToCard",
  [
    

  ], 
  async (req,res)=>{

    try {
      const errors = validationResult(req) 

      if(!errors.isEmpty()){
        return res.status(400).json({ errors:errors.array()})
      }
      const {id, userId} = req.body
      let oldItems = await Card.findOne({owner:userId})
      oldItems.items.push(id)
      
      
      oldItems.save()
      res.status(200).json({message:"Товар добавлен в корзину"})
    } catch (e) {
      console.log(e)
      res.status(500).json({message:e.message})
    }
})


route.post(
  "/getAllItems",
  [
    

  ], 
  async (req,res)=>{

    try {
      const errors = validationResult(req) 

      if(!errors.isEmpty()){
        return res.status(400).json({ errors:errors.array()})
      }
      const {userId} = req.body
      if(!userId){
        return
      }
      const userItems = await Card.find({owner:userId})
      res.status(200).json({message:"Товары получены",userItems:userItems, us:"WEWE"})
    } catch (e) {
      console.log(e)
      res.status(500).json({message:e.message})
    }
})

route.post(
  "/getItem",
  [
    

  ], 
  async (req,res)=>{

    try {
      const errors = validationResult(req) 

      if(!errors.isEmpty()){
        return res.status(400).json({ errors:errors.array()})
      }

      const {itemId} = req.body
      
      const item = await Item.findOne({_id:itemId})
      console.log(item)
      res.status(200).json({message:"Товар получен",item})
    } catch (e) {
      console.log(e)
      res.status(500).json({message:e.message})
    }
})





module.exports = route