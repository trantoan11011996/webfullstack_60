const express = require('express')
const app = express()
const port = 5000


//b1 : tạo midderware có nhiệm vụ chặn người dùng truy cập vào admin
const checkMiddleWare = (req,res,next)=>{
    //check ip có được phép admin hay không
    if(req.url === "/admin"){
        res.send('bạn không có quyền truy cập vào trang admin')
    }
    else{
        next()
    }
}

//b2 sử dụng middleware 
app.use(checkMiddleWare)


app.get("/",function(req,res){
    res.send('truy cập homepage thành công')
})

app.get("/shoppingcart",function(req,res){
    res.send('truy cập giỏ hàng thành công')
})

app.get("/admin",function(req,res){
    res.send('truy cập admin thành công')
})



app.listen(port)