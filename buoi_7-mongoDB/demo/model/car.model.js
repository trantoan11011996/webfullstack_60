const mongoose = require('mongoose')

const Schema = mongoose.Schema


// khai báo lược đồ
const CarSchema = new Schema({
    name : String,
    manufacture : String,
    pirce : Number
})
module.exports = mongoose.model('Car',CarSchema)