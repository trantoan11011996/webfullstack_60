const express = require('express')
const router = express.Router()


router.post("/",function(req,res){
    const {body } = req
    // const title = `user - ${body.name}`
    // console.log('body-data',body)
    // console.log('body',body.name)
    res.render('userInfo',{info : body})
    return
})
module.exports = router