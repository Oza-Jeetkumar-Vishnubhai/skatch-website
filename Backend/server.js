const express = require('express')
const app = express();
const path = require('path');
const bp = require('body-parser');
const mdb = require('./config/dbconnection');
const multer = require('multer');
const mongoose = require('mongoose');
const fs = require('fs');
const imgModel = require('./models/admin-posts')
// middlewares
app.use(express.json());
app.use(bp.urlencoded({extended:true}));

// static files
app.use('/uploads', express.static('uploads'));
app.use(express.static(path.join(__dirname,'uploads')));
// app.use(express.static(path.join(__dirname,'build')));
app.set('view engine','ejs');

mdb();

app.get('/admin',(req,res)=>{
    imgModel.find({},(err,items)=>{
        if(err)
        {
            console.log(err);
            res.status(500).send("an error occured: ",err);
        }
        else
        {
            res.render('test',{items:items});
        }
    })
});

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("file = ",file);
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage });

app.post('/admin', upload.single('image'), (req, res, next) => {
  
    var imgdata = req.body;
    console.log(req.file);
    var obj2 = {
        img: {
            // data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png',
            mimetype: req.file.mimetype,
            path: req.file.path
        },
        imgdata
    }
    console.log(obj2);
    const data = imgModel(obj2);
    data.save();
    res.redirect('/admin');
    // imgModel.create(obj2, (err, item) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         // item.save();
    //         res.redirect('/admin');
    //     }
    // });
});

app.get('/getphoto',(req,res)=>{
    try{
        imgModel.find({},(err,data)=>{
            res.send(data);
        })
    }
    catch(err){
        next(err);
    }
})

app.listen(process.env.PORT||3000,()=>{
    console.log(`server si running on http://localhost:${process.env.PORT||3000}`);
});