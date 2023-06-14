const user = require('../models/user')
const { v4: uuidv4 } = require("uuid")
const { SetUser } = require("../Service/auth");
const { body , validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

async function CreateUser(req,resp){

    const salt = await bcrypt.genSalt(10);
    let secpassword = await bcrypt.hash(req.body.password,salt);
    
    await user.create({
        name : req.body.name,
        email : req.body.email,
        password : secpassword
    });
    return resp.redirect('/');
}

async function LoginUser(req,resp){
    let email = req.body.email
    let userdata = await user.findOne({email});
    if(!userdata){
        return resp.redirect('/signup')
    }

    const pwdcompare = await bcrypt.compare(req.body.password,userdata.password);
    if(!pwdcompare){
        return resp.redirect('/login')
    }

    const authToken = SetUser(userdata)
    resp.cookie('usrid' , authToken)
    return resp.redirect('/');
}
 

module.exports = { CreateUser , LoginUser };