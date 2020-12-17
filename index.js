var express= require('express')
var app=express()
var bodyparser=require('body-parser')
var routingConfig=require('./Server/RouteConfig')
var Connectmongoose=require('./Server/DbConfig')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended:false
}))
app.use(express.static('public'));
app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
routingConfig.RouteConfig(app)
Connectmongoose.connectDb()
var port =3000;


app.listen(port,()=>{
    console.log("app running in "+ "" + port)
})