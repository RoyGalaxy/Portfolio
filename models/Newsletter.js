const mongoose = require("mongoose")

const NewsletterSchema = new mongoose.Schema(
    {
        email: {type: String,required: true,trim:true,unique:true},
        status: {type: String, default: "on"},
        lastSent: {type: String},
        totalSent: {type: Number,default: 0}
    },
    {timestamps: true}
)

module.exports = mongoose.model("Newsletter",NewsletterSchema)