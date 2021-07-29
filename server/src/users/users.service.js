const knex = require("../db/connection");
const tableName = "users";

exports.getUsers = async () => {
  try{
    const users = await knex('users')
    return users
  }catch(error){
    throw Error(error)
  }
}