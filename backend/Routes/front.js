const express = require( 'express' )
const modurl = require('../models/modurl')
const router = express.Router()

router.get('/', async (req,resp) =>{
    const urls = await modurl.find({}) 
    resp.render('main' , {urls : urls})
})

module.exports = router;