var express = require('express');

var router = express.Router();
var { createUser, UserLogin, editUser,uploadFile } = require('../Controller/LoginController')
var check_auth = require('../middleware/check-Auth')
var { fs_examp } = require('../Controller/fs')
var upload = require('../middleware/multer')
var {html_pdf}=require('../Controller/PdfConverter')
router.post('/register', createUser);
router.post('/login', UserLogin);
router.post('/edit', check_auth, editUser);
router.post('/upload', upload,uploadFile)
router.post('/pdf',html_pdf)




module.exports = router;