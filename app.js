const express = require("express")
const mongoose = require("mongoose")
const router = require("./router/userRouter")
const dotenv = require("dotenv");

const app = express()
app.use(express.json())
app.use(router)

dotenv.config();

const port = process.env.port;

const dataBase = process.env.apiLink;
mongoose.connect(dataBase).then(()=>{
    console.log(`database is successful`)
}).catch((err)=> {
    console.log(err.message)
})

app.listen(port, ()=> {
    console.log(`server is listening on port ${port}`)
})


