var mongoose= require('mongoose')
const {Schema}=mongoose

const tokenSchmea=new Schema({

token:{
    type:String,
    required:true
}
})
var Token=mongoose.model("token",tokenSchmea)
module.exports=Token