const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema(
    {
        email: {type: String,required: true,trim:true,unique:true},
        message: {type: String, required:true, trim:true},
        status: {type: String, default: "unreplied"},
        repliedDate: {type: Date}
    },
    {timestamps: true}
)

module.exports = mongoose.model("Contact",contactSchema)