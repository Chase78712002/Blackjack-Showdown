const knex = require("../db/connection");
const tableName = "users";

exports.getUsers = () => {
  
  knex.select().from(tableName)
  .then((data) => {
    console.log('did query some data')
    return data
  }).catch((err) => {
    console.log(`query broken and error ${err}`)
  })
  }