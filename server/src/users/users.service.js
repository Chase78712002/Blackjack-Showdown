const knex = require("../db/connection");
const tableName = "users";


async function getUsers() {
  return knex('users').select("*")
}

module.exports = {
  getUsers
}