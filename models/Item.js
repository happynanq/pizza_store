const {Schema, model} = require("mongoose")

const schema = new Schema({
  // owner:{type:Schema.Types.ObjectId, ref:"User", required:true},
  name:{type:String, required:true, unique:true},
  cost:{type:Number, required:true},
  img:{type:String},
  describe:{type:String, required:true},
  title:{type:String, required:true}
  
  
})

module.exports = model("Item", schema)