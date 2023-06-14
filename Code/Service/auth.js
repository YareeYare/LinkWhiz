const jwt = require('jsonwebtoken')
const jwtSecret = "konojorunojobananiwayumegaaru(#_#)"

function SetUser(user) {
  const Payload = {
    _id : user._id,
    email : user.email
  }
  return jwt.sign( Payload , jwtSecret )
}

function GetUser(authToken) {
  if(!authToken){ return null; }
  try{
    return jwt.verify( authToken , jwtSecret )
  }
  catch(error){
    return null;
  }
}

module.exports = { SetUser , GetUser };
