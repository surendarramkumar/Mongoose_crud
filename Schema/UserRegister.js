var mongoose= require('mongoose')
var {Schema} = mongoose;

var UserRegisterSchema=new Schema({
       Username:String,
       Password:String,
       Email:{
           type:String,
       },
       RegisterDate:{
           type:Date,
           default:Date.now
       },
       Mobile:{
           type:Number,
           required:true
       },
       Status:{
           type:Number,
           default:1
       }
},{versionKey:false}) 
var collection="USER_register"
 var UserRegister=mongoose.model(collection,UserRegisterSchema);
 module.exports=UserRegister
 
 