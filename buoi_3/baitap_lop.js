// bài 1 : intro
// viết 1 chương trình nodejs in ra các số chẵn duy nhất trong mảng sau
// [1 ,2 ,3 , 4, 5, 6, 7, 7, 8, 8, 9, 10]

const arr = [1 ,2 ,3 , 4, 5, 6, 7, 7, 8, 8, 9, 10]
const result = arr.filter(item=>item % 2 == 0)
const resultEven = Array.from(new Set(result))
console.log(resultEven)