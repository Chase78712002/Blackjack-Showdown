const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./users.service");


async function getUsers(req, res) {
  const data = await service.getUsers();
  res.status(200).json({data})
}


module.exports = {
  getUsers: [asyncErrorBoundary(getUsers)]
}
