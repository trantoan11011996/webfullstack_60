const mongoose = require('mongoose')

const connectDB = async() =>{
    // thuc hien connect den database

    try{
        const dbconfig = 'mongodb://localhost/fullstack'
        const connect = await mongoose.connect(dbconfig)
        console.log(`connect : ${connect.connection.host}`)

    }catch(e){
        console.log('err to connect')
    }
}

module.exports = connectDB