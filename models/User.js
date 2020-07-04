const {Schema, model} = require("mongoose")

const schema = new Schema({
  password:{type:String, required:true},
  email:{type:String, required:true, unique:true},
  name:{type:String, required:true},
  card:{type:Schema.Types.ObjectId, ref:"Card"}
})

module.exports = model("User", schema)