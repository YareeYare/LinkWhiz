const express = require('express')
const app = express();
const port = 4623;
const {mongoDB} = require('./db');
const modurl = require('./models/modurl')
mongoDB('mongodb://127.0.0.1:27017/url').then(() =>
console.log("mongoDB connected successfully!")
);

app.use(express.json());
app.use('/url' , require('./Routes/url'));
app.get('/:shortURL', async (req,resp)=>{
    const link = await modurl.findOneAndUpdate({shortURL : req.params.shortURL},
    { $push : {views : {clickedON : Date.now()}}});
    resp.redirect(link.longURL);
});
app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})
