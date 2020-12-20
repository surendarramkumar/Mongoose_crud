
const { query } = require('express')
const { insertDocument, getOneDocument, updateOneDocument } = require('../Model/index')
//const { use } = require('../Routes/LoginRoutes')
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken') 
const usermodel = 'userRegister'
const tokenmodel='token'
var path = require('path')
const fs=require('fs')
const fastcsv = require("fast-csv");
require('dotenv').config()


module.exports.createUser = async (req, res) => {
   
    try {
        var { Username, Password, Mobile, Email } = req.body
        var saltRounds = 10
        var hash = await bcrypt.hash(Password, saltRounds)
        var user = {
            Username: Username,
            Password: hash,
            Mobile: Mobile,
            Email: Email,
        }
        var query = {
            Email: Email
        }
        console.log(hash)
        var result = await getOneDocument('userRegister', query)
        if (result) {
            res.send("Email Already Exists")
        }
        else {
            var result1 = await insertDocument('userRegister', user)
            res.send('success')
            
        }

    }
    catch (err) {
        console.log(err)
        res.send("some Error")
    }
}

module.exports.UserLogin = async (req, res) => {
    var { Username, Password, Mobile, Email } = req.body
    var query = {
        Email: Email
    }
    try {
        var result = await getOneDocument(usermodel, query)
        if (result) {
            var match= await bcrypt.compare(Password,result.Password)
            if (match) {
                var payload={email:result.Email}
               var token=  jwt.sign(payload,process.env.secret_key,{ expiresIn: "1h"}) 
               var response={
                   Message:"login success",
                   Token:token
               }
               res.send(response) 
               console.log(token)
            }
            else {
                res.send("Please Enter Valid PassWord")
            }
        }
        else {
            res.send("Email Not Exists")
        }
    }
    catch (e) {
        console.log("err", e)
    }

}
module.exports.editUser = async (req, res) => {

    var { Username, Password, Mobile, Email } = req.body
    var query = {
        Email: Email
    }
    var update = {
        Mobile: Mobile,
        Username: Username
    }
    try {
        var result = await getOneDocument(usermodel, query)
        if (result) {
            var match = await bcrypt.compare(Password,result.Password)
            if (match) {
                var result1 = await updateOneDocument(usermodel, query, update)
                res.send("Edit Success")

            }
            else {
                res.send("PassWord Not Match")
            }
        }
        else {
            res.send("Email Not Exists")
        }
    }
    catch (e) {
        console.log(e)
        res.send(e)
    }
}
module.exports.uploadFile=(req, res) => {
    const file = req.file
    var data=[]
    if (!file) {
      return res.send("please upload a image");
    }
    else{
        try {

            let stream = fs.createReadStream(file.path); 
            let csvData = [];
            let csvStream = fastcsv.parse()
                .on("data", (data) => {
                    csvData.push(
                        {
                            first_name: data[0],
                            last_name: data[1],
                            company_name: data[2],
                            address: data[3],
                            city: data[4],
                            county: data[5],
                            state: data[6],
                            zip: data[7],
                            phone1: data[8],
                            phone2: data[9],
                            email: data[10],
                            web: data[11]
                        }
                        );
                }).
                on("end", async function () {
                    try {
                       csvData.shift(); 
                        res.send({ Message: "data Saved" ,
                        data:csvData
                    })
                        console.log(file)
                    }
                    catch (e) { console.log(e) }
                });
            stream.pipe(csvStream);
        } catch (e) {
            console.log(e)
        }
    }
    //  console.log(file)
      //res.send("Upload Success")
    }
