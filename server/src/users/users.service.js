<<<<<<< Updated upstream
=======
const knex = require("../db/connection");
const tableName = "users";


async function getUsers() {
  return knex(tableName).select("*")
}

async function findUsername(username) {
  return knex(tableName)
    .select("*")
    .where({ username })
}

async function create(user) {
  return knex(tableName)
        .insert(user)
        .returning("*")
        .then((createdRecords) => createdRecords[0]);
}

module.exports = {
  create,
  findUsername,
  getUsers
}
>>>>>>> Stashed changes
