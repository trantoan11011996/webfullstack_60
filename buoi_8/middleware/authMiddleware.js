
const jwt = require('jsonwebtoken')
function authMiddleware(req,res,next){
    const token = req.header('auth-token')
    if(!token) return res.status(401).send('không thể truy cập')
    /// giả sử user truy cập trên một máy tính khác => máy tính này chưa có auth-token của người dùng khi đăng nhập => k dùng được website
    /// token truy cập bằng máy mình => máy đã lưu token từ lần đăng nhập trước đó => dùng được website
    // nếu có token => check token đúng hay sai
    try{
        jwt.verify(token,'chuoibimat',function(err,role){
            if(err){
                res.send('err')
            }
            else{
                if(role.admin === true){
                    next()
                    return
                }
                else{
                    res.send('bạn không phải admin')
                    return
                }
            }
        })
     
    } 
    catch(err){
        res.send('err',err)
    }
}


module.exports = authMiddleware