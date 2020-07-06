const {Schema, model} = require("mongoose")

const schema = new Schema({
  owner:{type:Schema.Types.ObjectId, ref:"User", required:true},
  items:[
    {
      type:Schema.Types.ObjectId,
      ref:"Item",
      default:{count:0}
    }
  ]
})

module.exports = model("Card", schema)