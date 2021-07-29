const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./users.service");

exports.getUsers = async function (req, res) {
  try {
    const users = await UserService.getUsers()
    return res.status(200).json({status: 200, data: users})
  }catch(error){
    return res.status(400).json({status: 400, error})
  }
}