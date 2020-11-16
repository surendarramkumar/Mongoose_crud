var express= require('express')
var app=express()
var bodyparser=require('body-parser')
var routingConfig=require('./Server/RouteConfig')
var Connectmongoose=require('./Server/DbConfig')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended:false
}))
routingConfig.RouteConfig(app)
Connectmongoose.connectDb()
var port =3000;


app.listen(port,()=>{
    console.log("app running in "+ "" + port)
})