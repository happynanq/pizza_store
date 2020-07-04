const {Schema, model} = require("mongoose")

const schema = new Schema({
  owner:{type:Schema.Types.ObjectId, ref:"User", required:true},
  
})

module.exports = model("Item", schema)