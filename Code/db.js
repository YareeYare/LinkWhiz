const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
async function mongoDB(url) {
  return mongoose.connect(url);
}

module.exports = { mongoDB };

