const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
async function mongoDB(url) {
  return mongoose.connect(url,{useNewUrlParser : true , useUnifiedTopology : true });
}

module.exports = { mongoDB };

