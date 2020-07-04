const express = require("express")
const config = require("config")
const {connect} = require("mongoose")

const app = express()


const PORT = config.get('port') || 5000

app.use(express.json({extended:true}))
app.use("/api/auth", require("./routes/register"))



async function start(){
  try {
    await connect(config.get("mongoUrl"),{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true
    })

    app.listen(PORT, ()=>{
      console.log("Server has been started on port "+PORT)
    })

  } catch (e) {
    console.log(e.message)

  }
}
start()