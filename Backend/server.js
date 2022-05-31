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
app.use(bp.urlencoded({ extended: true }));

// static files
app.use(express.static(path.join(__dirname, 'static/build')));
app.use(express.static(path.join(__dirname, '')));

// view engine setup
app.set('view engine', 'ejs');

// database connection
mdb();

app.get('/admin', (req, res) => {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send("an error occured: ", err);
        }
        else {
            res.render('test', { items: items });
        }
    })
});

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("file = ", file);
        cb(null, 'static/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });

app.post('/admin', upload.single('image'), (req, res, next) => {

    try {
        var imgdata = req.body;
        console.log("req.body", req.body);
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
        res.redirect('/');
    }
    catch(err)
    {
        next(err);
    }
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

app.get('/getphoto', (req, res) => {
    try {
        imgModel.find({}, (err, data) => {
            res.send(data);
        })
    }
    catch (err) {
        next(err);
    }
})

app.use(function (err, req, res, next) {
    res.status(err.status || 500).send({ status: err.status || 500, error: err.message });
})

app.listen(process.env.PORT || 8000, () => {
    console.log(`server si running on http://localhost:${process.env.PORT || 8000}`);
});