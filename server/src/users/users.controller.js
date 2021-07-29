const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./users.service");
const bcrypt = require('bcrypt')

async function validateNewUser (req, res, next) {
  const {data: {username, password, email} = {}} = req.body;
  if(!username){
    next({ status: 400, message: "Need a username!"})
  }
  else if(username === "username" || username.includes(" ")){
    next({ status: 400, message: "Need a valid username without spaces!"})
  }
  else if(!password){
    next({ status: 400, message: "Need a password!"})
  }
  else if(!/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password) 
  || !/[A-Z]/g.test(password) || !/[0-9]/g.test(password)){
    next({ status: 400, message: "Password needs atleast one Uppercase Letter, one Number, and one special character"})
  }
  else if(password.length < 8){
    next({ status: 400, message: "Password needs to be atleast 8 characters"})
  }
  else if(!email){
    next({ status: 400, message: "Need an email!"})
  }
  else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/g.test(email)){
    next({ status: 400, message: "Need a valid email!"})
  }
  next();
}

async function isUsernameUnique (req, res, next) {
  const {data: {username} ={}} = req.body;
  const data = await service.findUsername(username);
  if(data.length)
    next({ status: 400, message: "Username already exists!"});
  
  next();
}
async function createUser(req, res) {
  req.body.data.password = bcrypt.hashSync(req.body.data.password, 12)
  const data = await service.create(req.body.data);
  res.status(204).json({ data })
}

async function getUsers(req, res) {
  const data = await service.getUsers();
  res.status(200).json({data})
}


const login = (req, res) => {
  const {data: {email, password} = {}} = req.body;
  service.findUser(email)
  .then((user) => {
    if(bcrypt.compareSync(password, user[0].password)){
      // send user info without password for security
      const {email, username, profile_img_url, coins} = user[0]
      res.send({email, username, profile_img_url, coins})
      return
    }
    return null
  }).catch(e => res.send(e))

  }


module.exports = {
  createUser : [validateNewUser, asyncErrorBoundary(isUsernameUnique), asyncErrorBoundary(createUser)], 
  getUsers: [asyncErrorBoundary(getUsers)],
  login
}
