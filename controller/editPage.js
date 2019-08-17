module.exports = (req, res)=>{
    res.render('edit', {
        emptyInfo : req.flash('emptyInfo'),
        exists : req.flash('userExist'),
        data : req.flash('data')[0] 
    })
}