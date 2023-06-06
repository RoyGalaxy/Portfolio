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

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to database"))
    .catch(err => console.log(err))

const newsletterRoute = require("./routes/newsletter.js")

app.use(cors())
app.use(express.json())
app.use("/api/newsletter",newsletterRoute)

app.listen(PORT,() => {
    console.log("server started at port "+ PORT)
})