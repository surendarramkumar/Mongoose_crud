const fs=require('fs')


module.exports.fs_examp=(req,res)=>{

fs.readFile('test.txt',(err,fd)=>{
if(err){
console.log(err)
}
else{
    res.send(fd)
    console.log("success")
}
})


}