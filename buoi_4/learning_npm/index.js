
const jsonExport = require('jsonexport')

const user =
    {
        name: "Tran Toan",
        age: 26,
    }

jsonExport(user,function(err,csv){
    if(err) return console.error(err)
    console.log('csv contact',csv)   
})
