const express = require( 'express' )
const router = express.Router()
const { CreateShortURL , ViewsAndData} = require('../Controllers/url');

router.post('/' , CreateShortURL);
router.get('/linkdata/:shortURL' , ViewsAndData);
module.exports = router;