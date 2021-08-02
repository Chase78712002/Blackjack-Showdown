const knex = require("../db/connection");
const tableName = "users";


async function getCoin(username) {
    return knex(tableName)
            .where({username: username})
            .select('coins')
}


async function updateCoin(username, coinBalance) {
    return knex(tableName)
            .where({username})
            .update({coins: coinBalance})
            .then( res => {
                return coinBalance
            })
  }
  

module.exports = {
    getCoin,
    updateCoin
}