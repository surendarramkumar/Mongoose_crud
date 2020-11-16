var mongoose=require('mongoose')

var db={
    'userRegister':require('../Schema/UserRegister')
}

module.exports.insertDocument=async (model,doc)=>{
          
    var data=new db[model](doc)
    // return new Promise((resolve,reject)=>{
    //   data.save((err,result)=>{
    //   if(err){
    //     reject(err)
    //   }
    //   else{
    //     resolve(result)
    //   }
    // })
    // })
    return await data.save()

}
module.exports.getOneDocument= async  (model,query)=>{
var data =db[model]
// return new Promise((resolve,reject)=>{
//   data.findOne(query,(err,result)=>{
//     if(err){
//       reject(err)
//     }
//     else{
//       resolve(result)
//     }
//   })
// })
return await data.findOne(query)
}

module.exports.updateOneDocument= async(model,query,update)=>{
var data =db[model]
// return new Promise((resolve,reject)=>{
// data.updateOne(query,update,function(err,result){
// if(err){
//   reject(err)
// }
// else{
//   resolve(result)
// }
//  })
// })
return await data.updateOne(query,update)
}