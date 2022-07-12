const express = require('express')
const mangaRouter = express.Router()

///

const manga = [
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
        name : "doraemon",
    }
]
mangaRouter.get('/',function(req,res){
    res.send(manga)
}) // => phương thức get truy cập vào api manga

mangaRouter.post("/",function(req,res){
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
                ...item,
                name:req.body.name
            }
        }
        return item
    })
    res.send(newName)
})
mangaRouter.delete("/",function(req,res){
    const newManga = manga.filter(item=>item.id !== req.body.id)
    
    res.send(newManga)
})
module.exports = mangaRouter