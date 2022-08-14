// ES6

//1. Arrow function
// =>

const numbers  = [1,2,3,4]

// cách viết với arrow ở ES6 => gọn code
const number = numbers.filter((n)=>{
    return n % 2 === 1
})
console.log(number)


//2. destructuring

const numberArr = [1,2,3]
const [oneArrow, twoArrow, threeArrow] = numberArr
console.log(oneArrow,twoArrow,threeArrow)

const obj = {firstname : "Trần" , lastname : "Toàn"}
const {firstname, lastname} = obj
console.log(firstname,lastname)

// spread operator

const oldArr =[1,2,3]
const result = [...oldArr,4,5]
console.log(result)

const oldData = [{
    name : "Toan",
    age : 28
}]

const newObj = {
    name : "Minh",
    age : 25
}

const newData = [...oldData,newObj]
console.log(newData)

//4 rest parameter
// tham số đại diện cho những tham số không được khai báo

function  numberRest (num1,num2, ...numOther){
    console.log("x" ,num1)
    console.log("y",num2)
    console.log('numOther',numOther)
}
numberRest (1,2,5,6,7)


//6. Classes

class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(this.name + "đang phát ra âm thanh")
    }
}

class Dog extends Animal{
        speak(){
            console.log(this.name + "đang sủa")
        }
}





class Car{
    constructor(name,speed){
        this.name = name;
        this.speed = speed
    }
    acclerate(){
        this.speed += 10;
        console.log(`${this.name} đang chạy với tốc độ ${this.speed}`)
    }
    brake(){
        this.speed -= 5;
        console.log(`${this.name} đang chạy với tốc độ ${this.speed}`)
    }
    get speedUs(){
        return this.speed / 1.6
    }
    set speedUs(a){
        this.speed = a * 1.6
    }
}

let BMW = new Car ("BMW", 120)
console.log(BMW)
BMW.acclerate()

BMW.speedUs = 50



//// xử lí bất đồng bộ

function first(){
    setTimeout(function(){
        console.log('một')
    },5000)
} /// thực hiện fucntion sau 1 khoảng thời gian => setTimeout
 // sau 1 khoảng thời gian thì thực hiện function => setInteval
function seccond(){
    console.log('2')
}
first()
seccond()


// Promise

//1. Khởi tạo 1 promise

const promisePending = new Promise(function(resolve,reject){

})

console.log('trạng thái promise lúc mới khởi tạo',promisePending) //=> promiseState = pending , promiseResult = undefined


// 2.khi resolve được gọi

const promiseFulfilled = new Promise(function (resolve, reject){
    resolve()
})

console.log('trạng thái promise khi resolve được gọi ', promiseFulfilled) // =>promiseState = fulfilled


// 3. khi reject được gọi 

// const promiseReject = new Promise(function (resolve, reject){
//     reject('xảy ra lỗi')
// })
// console.log('trạng thái promise khi reject được gọi ', promiseReject)

//4 . resolve được gọi và trả về data ( data có thể là bât kì giá trị nào=> cụ thể là API axios)

const promiseData = new Promise(function (resolve, reject){
    resolve([1,2,3])
})

console.log('resolve được gọi và trả về data', promiseData)

// các phương thức của promise
// .then() => được gọi khi promise thành công , trả về giá trị của resolve
// .catch()=> được gọi khi promise thất bại , trả về giá trị reject


const promiseMethod = new Promise(function (resolve, reject){

    // const jsonData = {
    //     name : "Trần Minh Toàn",
    //     age : 31,
    //     job : "sale man"
    // }
    // resolve(jsonData) // khi resolve được gọi thì chạy vào .then, khi reject được gọi thì chạy vào catch
    const errorNote = "Can't not get data"
    reject(errorNote);
})  
promiseMethod
.then((jsonData)=>{
    console.log('hàm resolve được gọi : success' , jsonData)
    const newData = [...oddArr,jsonData]
    console.log('new',newData)
})
.catch((err)=>{   /// có thể dùng để thực hiện 1 tác vụ nào đó hoặc đơn giản là ném ra lỗi thôi !!!!
    console.log(err)
    throw err
})
