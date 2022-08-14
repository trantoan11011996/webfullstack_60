const express = require('express')
const joi = require('joi')
const mangaRouter = express.Router()
let manga = [
    {
        id : "1",
        name : "7 vien ngoc rong"
    },
    {
        id : "2",
        name : "conan",
    },
    {
        id : "3",
        name : "songoku",
    }
]
mangaRouter.get('/',function(req,res){
    res.send(manga)
}) // => phương thức get truy cập vào api manga

mangaRouter.post("/",function(req,res){
    const {error} = validateManga(req.body)    // joi phân rã về nhiều biến error là 1 trong cái error
    console.log('err',error)
    if(error) return res.status(400).send(error.details[0].message)
    const newManga = {
        id : manga.length + 1,
        name : req.body.name,
    }
    manga.push(newManga)
    res.send(manga)
})

mangaRouter.put("/",function(req,res){
    const newName = manga.map(item=>{
        if(item.id === req.body.id){
            return {
                id : item.id,
                name:req.body.name
            }
        }
        return item
    })
    res.send(newName)
})
mangaRouter.delete("/",function(req,res){
    let newManga = manga.filter(item=>item.id !== req.body.id)
    manga=newManga
    res.send(newManga)
})

function validateManga(manga){
    const schema = joi.object({
        name : joi.string().min(5).required()
    })
    return schema.validate(manga)
}
module.exports = mangaRouter