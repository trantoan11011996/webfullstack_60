const express = require('express')
const app = express()
const port = 5000;
const mangaRouter = require('./router/routerManga')


app.use(express.json())
app.use(`/api/manga/`,mangaRouter)

app.listen(port, ()=>{
    console.log('server running with porttttt',5000)
})
console.log('hellossdadawdawd')