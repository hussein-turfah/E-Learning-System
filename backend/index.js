const express = require ("express");
const app = express();
require ("dotenv").config()
app.use(express.json())

const auth_router = require("./routes/auth.routes")
app.use('/auth', auth_router)

app.listen(process.env.PORT,(err)=>{
  if (err) console.error(err)
  console.log("Server is up and running on port", process.env.PORT)
  require ("./config/db.config")

})