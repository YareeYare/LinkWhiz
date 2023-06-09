const express = require('express')
const app = express();
const port = 4500;
const {mongoDB} = require('./db');
mongoDB('mongodb://127.0.0.1:27017/url').then(() =>
console.log("mongoDB connected successfully!")
);

app.use(express.json());
app.use('/url' , require('./Routes/url')); 
app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})
