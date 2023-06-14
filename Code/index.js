const express = require('express')
const cookieParser = require("cookie-parser");
const { LoggedinUser, AuthorizedOrNot } = require("./middlewares/auth");

const app = express();
const port = 4623;
const {mongoDB} = require('./db');
const modurl = require('./models/modurl')
const path = require('path')
mongoDB('mongodb://127.0.0.1:27017/url').then(() =>
console.log("mongoDB connected successfully!")
);

app.set('view engine' , 'ejs');
app.set('views' , path.resolve('./views'));
app.use(express.json());
app.use(express.urlencoded ({ extended : false }));
app.use(cookieParser());

app.use('/url' , LoggedinUser , require('./Routes/url'));
app.use('/user' , require('./Routes/CreateUser'));
app.use('/' , AuthorizedOrNot ,require('./Routes/front'));
app.get('/url/:srtURL', async (req,resp)=>{
    const link = await modurl.findOneAndUpdate({shortURL : req.params.srtURL},
    { $push : {views : {clickedON : Date.now()}}});
    resp.redirect(link.longURL);
});

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})
