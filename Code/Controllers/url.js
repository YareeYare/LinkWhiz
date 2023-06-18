const url = require('../models/modurl');

const shortid = require("shortid");

async function CreateShortURL(req, resp) {
    const body = req.body;
    if (!body.url) return resp.status(400).json({ error: "please enter the url" });
    const shortID = shortid();
  
    await url.create({
      longURL: body.url,
      shortURL: shortID,
      notes : body.notes,
      views: [],
      createdBy: req.user._id
    });
    resp.render('main' , {srtURL : shortID })
  }

  module.exports = { CreateShortURL };