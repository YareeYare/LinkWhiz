const express = require( 'express' )
const router = express.Router()
const { CreateShortURL } = require('../Controllers/url'); //, ViewsAndData

router.post('/' , CreateShortURL);
module.exports = router;