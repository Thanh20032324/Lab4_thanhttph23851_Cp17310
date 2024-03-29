var express = require('express');
var multer = require('multer');
var app = express();
var storage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./upload');
    },
    filename:function(req,file,callback){
        callback(null, file.originalname)

    }
});
var upload = multer({storage:storage}).single('myfile');
app.get('/', function (req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/upload", function(req,res){
    upload(req,res,function(err){
        if (err) {
            return res.end("Error uploading file");
        }
        res.end("File is uploaded seccesfully");
    });
});
app.listen(8080,function(){
    console.log("Server is running on port 8080");
});