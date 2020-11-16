
const { query } = require('express')
const { insertDocument, getOneDocument, updateOneDocument } = require('../Model/index')
//const { use } = require('../Routes/LoginRoutes')
const bcrypt = require('bcrypt')

const User = require('../Schema/UserRegister')
const usermodel = 'userRegister'

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
                res.send("Login Success")   
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