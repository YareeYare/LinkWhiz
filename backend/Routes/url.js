const express = require( 'express' )
const router = express.Router()
const { CreateShortURL } = require('../Controllers/url');

router.post('/' , CreateShortURL);
module.exports = router;