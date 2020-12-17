var express= require('express');
var router=express.Router();
var {createUser,UserLogin,editUser}=require('../Controller/LoginController')
var check_auth=require('../middleware/check-Auth')
var {fs_examp}=require('../Controller/fs')
router.post('/register',createUser);
router.post('/login',UserLogin);
router.post('/edit',check_auth,editUser);
router.get('/fs',fs_examp)


module.exports=router;