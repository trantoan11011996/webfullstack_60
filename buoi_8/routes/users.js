var express = require('express');
var router = express.Router();
const user = require('../model/userModel')
const bcrypt = require('bcrypt');
const {validateLogin,validateRegister} = require('../validation/validate');
const verifyMiddlware = require('../middleware/authMiddleware')
const jwt = require('jsonwebtoken');
const userModel = require('../model/userModel');
// 1. viet 1 API đăng ký người dùng
// kiểm tra email đã tồn tại ?
// mã hóa password
router.post('/register',async function(req,res){ // giap tiếp với database nên cần async await do có độ trễ phản hồi từ sever
  //validate user

  const {error} = validateRegister(req.body)
  if(error) return res.status(400).send(error.details[0].message)

  // kiểm tra email có tồn tại hay chưa
  const emailExist = await user.findOne({email : req.body.email})
  if(emailExist) return res.status(400).send('email exist in database')
   // hash password
   const salt = await bcrypt.genSalt(10)
   const hasspassword = await bcrypt.hash(req.body.password,salt)
  /// tạo user 
  const newUser = new user();
  newUser.name = req.body.name;
  newUser.email = req.body.email;
  newUser.password = hasspassword;
  newUser.admin = req.body.admin;

 
  try{
    const user = await newUser.save()
    res.send(user)
  }catch(error){
    res.send('lỗi cmnr')
  }
})
// 2. viết api login vào hệ thống
//  kiểm tra email có đúng không ?
// kiểm tra password ?
// generate ra chuỗi token (dựa trên secret string - chuỗi bí mật)
router.post("/login",async function(req,res){
  const {error} = validateLogin(req.body)
  if(error) return res.status(400).send(error.details[0].message)

  //kiểm tra email có đúng không
  const userLogin = await user.findOne({email : req.body.email})
  if(!userLogin) {
    res.status(400).send("wrong email")
    return
  }   
  // kiểm tra pass
  const passLogin = await bcrypt.compare(req.body.password, userLogin.password)
  if(!passLogin) {
    res.status(400).send('wrong pass')
    return
  }
  const token = jwt.sign({_id: userLogin._id,admin : userLogin.admin},"chuoibimat");
  res.header('auth-token',token).send(token)
})
// 3. viết 1 api :
  // + trả về 1 string : hello
  // nếu api này gắn chuỗi token đc generate từ bước 2
  // => trả về hello 
  /// api gắn chuỗi token fake => k có quyền truy cập
        /// tạo ra 1 middleware (nằm giữa request và reponse)=> dùng để check điều kiện token gởi lên có hợp lệ hay không

  router.get("/",verifyMiddlware,function(req,res){
    console.log(req.user)
    userModel.find({}).exec(function(err,data){
      if(err){
        res.send('err')
      }
      else{
        res.json(data)
      }
    })


  })
module.exports = router;
