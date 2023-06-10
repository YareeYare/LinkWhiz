const url = require('../models/modurl');

const shortid = require("shortid");

async function CreateShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "please enter the url" });
    const shortID = shortid();
  
    await url.create({
      longURL: body.url,
      shortURL: shortID,
      views: []
    });
  
    return res.json({ id : shortID });
  }
async function ViewsAndData(req, resp){
  const shortURL = req.params.shortURL;
  const data = await url.findOne({shortURL});
  return resp.json({
    ViewsTillNow : data.views.length,
    ViewsData : data.views
  });
}

  module.exports = { CreateShortURL , ViewsAndData };