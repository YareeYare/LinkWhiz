const url = require('../models/modurl');

const shortid = require("shortid");

async function CreateShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "please enter the url" });
    const shortID = shortid();
  
    await URL.create({
      longURL: body.url,
      shortURL: shortID,
      views: []
    });
  
    return res.json({ id : shortID });
  }

  module.exports = { CreateShortURL };