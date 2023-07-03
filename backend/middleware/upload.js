import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req,file,cb){
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

var upload = multer({
    
     storage: storage,
     fileFilter: function(req,file,cb){
        if(
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg" 
        ){
            cb(null, true)
        }else
        {
            console.log("only jpg & png file supported!")
            cb(null, false)
        }
    },
    limits:{
        fileSize: 1024 * 1024 * 2
    }  
})

export default upload;


