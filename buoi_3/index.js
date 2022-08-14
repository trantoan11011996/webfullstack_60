//////////////////////// NODEJS 


// callstack 
// - callstack  la 1 LIFO ( last in , first out) queue (ngăn sếp)
// - event loop sẽ liên tục kiểm tra callstack (kiểm tra ngăn xếp) xem có function cần thực thi hay không 
// - xem cách giải thích bằng mô hình trên link git - webfullstack phần chapter 3 - tongquan 

// const bar = () =>  console.log('bar')
// const baz = () => console.log('baz')
// const foo = () =>{
//     console.log("foo")
//     bar()
//     baz()
// }
// foo()

const bar1 = () =>  console.log('bar')
const baz1 = () => console.log('baz')
const foo1 = () =>{
    console.log("foo")
    setTimeout(bar1,5000)
    baz1()
}
foo1()


//// chạy js và thực thi mổi trường nodejs

const amount =  9;

if(amount < 9){
    console.log('small number')
}
else{
    console.log('large number')
}

console.log('hello world')

