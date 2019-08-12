module.exports = (req, res)=>{
    res.render('register',{
        errors : req.flash('registerationErr'),
        data : req.flash('data')[0],
        exists : req.flash('userExist')
    })
}