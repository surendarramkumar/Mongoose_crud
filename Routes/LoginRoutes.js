var express= require('express');
var router=express.Router();
var {createUser,UserLogin,editUser}=require('../Controller/LoginController')
router.post('/register',createUser);
router.post('/login',UserLogin);
router.post('/edit',editUser);



module.exports=router;