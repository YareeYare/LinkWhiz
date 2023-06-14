const express = require( 'express' )
const modurl = require('../models/modurl')
const router = express.Router()

router.get('/', async (req,resp) =>{
    if(!req.user) return resp.redirect('/login')
    const urls = await modurl.find({createdBy : req.user._id}) 
    resp.render('main' , {urls : urls})
})
router.get('/signup',(req,resp)=>{
    return resp.render('SignUp');
})
router.get('/login',(req,resp)=>{
    return resp.render('Login');
})
module.exports = router;