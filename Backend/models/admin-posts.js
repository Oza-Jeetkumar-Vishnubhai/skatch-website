const mongoose = require('mongoose');

const img = new mongoose.Schema({
    img:{
        data:Buffer,
        mimetype:String,
        path:String
    },
    imgdata:{
        imgname:String,
        smdesc:String,
        desc:String,
        tag:[{tagname:String}]
    }
});
const imgModel = mongoose.model('Images',img);

module.exports = imgModel;