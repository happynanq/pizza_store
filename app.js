const express = require("express")
const config = require("config")
const {connect} = require("mongoose")
const bodyParser = require("body-parser")

const app = express()


const PORT = config.get('port') || 5000

app.use(express.json({extended:true}))
// app.use(bodyParser({type:"application/json"}))

app.use("/api/auth", require("./routes/register"))
app.use("/api/item", require("./routes/item"))



async function start(){
  try {
    await connect(config.get("mongoUrl"),{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true
    },(err, client)=>{
      // if(err){
      //   console.log("Err", err, "Err")
      // }
      // console.log("Client",client, "Client")
    })

    app.listen(PORT, ()=>{
      console.log("Server has been started on port "+PORT)
    })

  } catch (e) {
    console.log(e)

  }
}
start()