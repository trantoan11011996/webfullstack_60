const creatModules = require('./modules.js')

console.log('----------Modules được import',)

console.log('modules-content------2',module)


const getMydateTime = creatModules.getMydateTime()
const myDir = creatModules.getDirname()

console.log('my Date Time', getMydateTime)
console.log('myDir',myDir)

const getMyAge = creatModules.myAge

console.log('my age',getMyAge)

const getMyinfo = creatModules.myInfo

console.log('--------sum-------',getMyinfo.sum(2,2))