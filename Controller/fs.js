const fs=require('fs')
var data=''
module.exports.fs_examp=(req,res)=>{
let readStream=fs.createReadStream('./public/test.txt')

readStream.on('data',(chunk)=>{
data+=chunk
})
readStream.on('end',()=>{
    res.send({
        Message:"success",
        Data:data
    })     
})
readStream.on('error',(err)=>{
    console.log(err.stack)
    res.send({
        Message:"some Error",
    })
})
}