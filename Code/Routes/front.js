const express = require( 'express' )
const modurl = require('../models/modurl')
const router = express.Router()

router.get('/', async (req,resp) =>{
    const urls = await modurl.find({}) 
    resp.render('main' , {urls : urls})
})
router.get('/signup',(req,resp)=>{
    return resp.render('SignUp');
})
router.get('/login',(req,resp)=>{
    return resp.render('Login');
})
module.exports = router;