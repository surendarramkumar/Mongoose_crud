var express= require('express');
var multer  = require('multer')
var router=express.Router();
var {createUser,UserLogin,editUser}=require('../Controller/LoginController')
var check_auth=require('../middleware/check-Auth')
var {fs_examp}=require('../Controller/fs')
var upload=require('../middleware/multer')
router.post('/register',createUser);
router.post('/login',UserLogin);
router.post('/edit',check_auth,editUser);
router.post('/fs',upload, (req, res) => {
    const file = req.file
    if (!file) {
     return  res.send("please upload a image");
    }
    console.log(file);
    res.send("upload successfully")
  })


module.exports=router;