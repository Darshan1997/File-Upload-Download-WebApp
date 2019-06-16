var express = require('express');
var router = express.Router();
var multer = require('multer')
var path = require('path')

router.post('/downloadfile',function(req,res,next){
  filepath = path.join(__dirname,'../uploads/') + req.body.fileName
  res.sendfile(filepath)
})



var store = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: store }).single('file')


router.post('/uploads', function (req, res, next) {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      res.status(501).json({ error: err })
    }else{
      res.status(200).json({filename:req.file.originalname})
    }
  })

})


module.exports = router;
