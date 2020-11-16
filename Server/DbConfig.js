
var mongoose=require('mongoose')

module.exports.connectDb=()=>{
    mongoose.connect('mongodb://localhost:27017',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify:false,
        dbName:"mongoose_examp"
     },
    (err)=>{
        if(err){
            console.log("error in mongoose")
        }
        else{
            console.log("mongodb conected")
            console.log()
        }
    })
}
