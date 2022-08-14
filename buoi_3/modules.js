/*
- để include 1 modules từ 1 file : sử dụng hàm required()

có 3 loại modules
-Core Modules (modules của object)
- Local modules (module tự tạo)
- third party modules (module người khác viết và đẩy lên npmjs.com)
- tham khảo 
*/

/// path
// const path = require('path')
// console.log(path)
// console.log('path-sep',path.sep)
// console.log('posix',path.posix.resolve())


// /// os modules
// const os = require('os')
// const user = os.userInfo()
// console.log('os',os)
// console.log('user info', user)


// fs modules
// var fs = require('fs');

// fs.readFile('demofile.js', 'utf8', function(err, data) {
//   if (err) throw err;
//   console.log(data);
// });


/// creat modules
/// có 2 cách tạo 1 modules
/* 
  sử dụng modules export
  sử dụng export
*/

exports.getMydateTime = function () {
  return Date()
}

exports.getDirname = function(){
  return __dirname
}
console.log('modules-content------1',module)


const myAge = 32;

exports.myAge = myAge

function sum(a,b){
  return a + b
}
const myInfo = {
  name : 'trần minh toàn',
  age : "26",
  sum : sum,
}
exports.myInfo = myInfo

///Bài 2: build-in modules
// Cho 1 chuoi json có nội dung sau { name: 'tuananh', children: ['com', 'ngo'], age: '31' }
// Sử dụng queryString để convert sang chuỗi sau 'name=tuananh&children=com&children=ngo&age=31'

const queryString = require('node:querystring')

console.log(queryString.stringify({ name: 'tuananh', children: ['com', 'ngo'], age: '31' }))
const newObject = queryString.parse('w=%D6%D0%CE%C4&foo=bar', null, null,decodeURIComponent);
console.log(newObject.foo)