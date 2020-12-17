var multer  = require('multer')
var path=require('path')


    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './public/uploads')
        },
        filename: function (req, file, cb) {
          cb(null, file.fieldname + '-' + Date.now())
        }
      })
    const checkFileType = (file, cb) => {
        const filetypes = /jpeg|jpg|png|pdf/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if (mimetype && extname) {
          return cb(null, true);
        }
        return cb("images and Pdf only allowed")
      };
      var  upload= multer({ storage: storage, limits: {
        fileSize: 1024 * 1024 * 10
      },  fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
      }
    }).single('single')

module.exports=upload
 

