const express = require('express')
const cookieParser = require("cookie-parser");
const { LoggedinUser, AuthorizedOrNot } = require("./middlewares/auth");

const app = express();
const port = 4623;
const {mongoDB} = require('./db');
const modurl = require('./models/modurl')
const path = require('path')
mongoDB('mongodb+srv://HungryHopperAdmin:hhafoods123@cluster0.xorg9y0.mongodb.net/url?retryWrites=true&w=majority').then(() =>
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
app.use('/login' , require('./Routes/CreateUser'))
app.get('/url/:srtURL', async (req,resp)=>{
    const link = await modurl.findOneAndUpdate({shortURL : req.params.srtURL},
    { $push : {views : {clickedON : Date.now()}}});
    resp.redirect(link.longURL);
});

app.get('/search', (req, res) => {
    const query = req.query.query;
    modurl.find({
      $or: [
        { longURL : { $regex: query, $options: 'i' } },
        { shortURL : { $regex: query, $options: 'i' } },
        { notes : { $regex: query, $options: 'i' } }
      ]
    })
    .then(results => {
        res.render('search-results', { results, query }); 
      })
    .catch(error => {
        console.error('Error searching URLs:', error);
        res.status(500).send('An error occurred while searching URLs');
      });
  });

app.get('/already-a-user', (req, resp) => {
    resp.redirect('/login'); 
});

app.get('/new-user', (req, resp) => {
    resp.redirect('/signup'); 
});

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})
