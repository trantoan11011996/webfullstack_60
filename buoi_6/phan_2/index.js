const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')

//middleware
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

/// middleware -- register public folder

app.use(express.static('public'))

// app.get('/',function(req,res){
//     res.render('index')
// })

app.listen(4000,()=>{
    console.log('web succes run on port 4000')
})