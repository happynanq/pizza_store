const {Router} = require("express")
const {check,validationResult} = require("express-validator")
const config = require("config")
const Item = require("../models/Item")
const route = Router()

route.post(
  "/add",
  [
    check(["name", "description","cost", "title"], "Вы что-то не ввели").exists()

  ], 
  async (req,res)=>{

    try {
      const {img, name, description, cost,title} = req.body
      console.log(img, name, description, cost)

      const errors = validationResult(req)
      if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
      }const candidate = await Item.findOne({name})
      if(candidate){
        console.log(candidate)
        return res.status(400).json({message:`${name} уже есть!`})
      }

      const item = new Item({img, name, describe:description, cost, title})
      item.save()
      res.status(201).json({message:"Продукт создан"})
    } catch (e) {
      console.log(e)
      res.status(500).json({message:e.message})
    }
})

route.post(
  "/get",
  [
    
  ],  
  async (req,res)=>{

    try {
      const errors = validationResult(req)
      if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
      }

      const items = await Item.find({})
        res.status(201).json({message:"Продукты получены",items})

    } catch (e) {
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
        return res.status(400).json({errors:errors.array()})
      }
      const {id} = req.body
      console.log(id)
      const item = await Item.findOne({_id:id})
        res.status(201).json({message:"Продукт получен",item})

    } catch (e) {
      res.status(500).json({message:e.message})
    }
})


route.delete(
  "/delete",
  [
    
  ],  
  async (req,res)=>{

    try {
      const errors = validationResult(req)
      if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
      }
      const {id} = req.body 
      
      await Item.findByIdAndDelete({_id:id})
      
      res.status(201).json({message:"Продукт Удалён"})

    } catch (e) {
      res.status(500).json({message:e.message})
    }
})



module.exports = route