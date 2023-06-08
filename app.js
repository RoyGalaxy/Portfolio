const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")

// Variables
const PORT = process.env.PORT || 1412
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static("./public"))

dotenv.config();

const contactRoute = require("./routes/contact.js")

app.use(cors())
app.use(express.json())
app.use("/api/contact",contactRoute)

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to database")
        app.listen(PORT,() => {
            console.log("server started at port "+ PORT)
        })
    })
    .catch(err => console.log(err))