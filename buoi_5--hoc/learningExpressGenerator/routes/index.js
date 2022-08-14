const express = require('express')
const router = express.Router()

router.get("/",function(req,res){
    const header =  "Lớp web fullstack web 62"
    console.log('title-title',{header:header})
    res.render('index',{header : header})    // đọc file trong folder view
    // sử dụng res.send để hiển thị ra postman, res.render sẽ hiển thì ra màn hình ( cấu trúc view trong mô hình MVC)
    // nodejs vẫn có khả năng tạo ra 1 trang web => k cần phải dùng reactjs
    /// nếu dùng reactjs thì nodejs dùng để tạo ra dữ liệu bên server (phần routing,model,controler)
})

module.exports = router
