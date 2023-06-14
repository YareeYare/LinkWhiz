const user = require('../models/user')
const { v4: uuidv4 } = require("uuid")
const { SetUser } = require("../Service/auth");

async function CreateUser(req,resp){

    await user.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    });
    return resp.redirect('/');
}

async function LoginUser(req,resp){
    const credentials = {email,password} = req.body
    const userdata = await user.findOne(credentials)
    if(!userdata){
        return resp.render('Login',{
            error : "Enter a valid Username and Password"
        })
    }

    const authToken = SetUser(userdata)
    resp.cookie('usrid' , authToken)
    return resp.redirect('/');
}
 

module.exports = { CreateUser , LoginUser };