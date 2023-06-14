const { GetUser } = require("../Service/auth");

async function LoggedinUser(req, res, next) {
  const UUid = req.cookies?.usrid;

  if (!UUid) return res.redirect("/login");
  const user = GetUser(UUid);

  if (!user) return res.redirect("/login");

  req.user = user;
   
  next();
}

async function AuthorizedOrNot(req, res, next) {  
  const UUid = req.cookies?.usrid;

  const user = GetUser(UUid);

  req.user = user;
  next();
}

module.exports = { LoggedinUser , AuthorizedOrNot };
