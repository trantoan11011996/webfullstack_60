// viết code CRUD với mongoDB sử dụng mongoose

/// create -- tạo ra 1 oto

const express = require('express')
const router = express.Router()
const carsModel = require('../model/car.model')

//api create new car
router.post('/', function (req, res) {
    const car = new carsModel()
    // đối tượng car được tạo dựa theo khuôn mẫu carsModel
    car.name = req.body.name,
        car.manufacture = req.body.manufacture,
        car.pirce = req.body.price


    car.save((err, carOBJ) => {
        if (err) {
            res.send('loi luu thong tin oto')
        }
        else {
            console.log('luu thong tin thành công', carOBJ)
            res.send(car)
        }
    })
})
router.get("/name/:name", function (req, res) {
    const carname = req.params.name
    carsModel.find({ name: carname }).exec((err, cars) => {
        if (err) {
            console.log('lỗi tìm car', err)
            res.send('khong the lay thong tin car')
            /// database hoặc mạng có vấn đề thì sẽ nhảy vô đây => nếu mạng ổn định và database
            // ổn định thì vẫn sẽ vô else nhưng trả ra mãng rỗng
        } else {
            console.log('lay thanh cong thong tin', cars)
            res.json(cars)
        }
    })
})

/// api get by id
router.get('/:id', function (req, res) {
    carsModel.findById({
        _id: req.params.id
    }).exec((err, car) => {
        if (err) {
            console.log('err', err)
            res.send('co loi xay ra')
        } else {
            console.log('lay thanh cong car', car)
            res.json(car)
        }
    })
})
/// api update

router.put('/:id',function(req,res){
    carsModel.findOneAndUpdate({
        _id : req.params.id
    },{
       $set :{name : req.body.name}
    },
    {upsert : true},
    function(err,car){
        if(err){
            res.send('co loi xảy ra')
        }else{
            res.send(car)
        }
    })
})


module.exports = router