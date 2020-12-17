var jwt=require('jsonwebtoken')
module.exports=(req,res,next)=>{
    try{
        // console.log(req.headers);
        const token =req.headers["authorization"].split(" ")[1]
        console.log(token)
    var decoded=jwt.verify(token,process.env.secret_key)
    console.log(decoded)
    
    next();
    }
    catch(err){
        res.send("Auth faild")
        console.log(err)
    }
}