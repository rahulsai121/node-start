const path=require('path')

exports.getContactUs=(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','login.html'))
};

exports.postSuccess=(req,res)=>{
    console.log(req.body)
    res.sendFile(path.join(__dirname,'../','views','login-success.html'))
}