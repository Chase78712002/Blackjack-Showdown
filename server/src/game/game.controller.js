const { getCoin } = require('./game.service')

async function getCoins(username) {
    const coin = await getCoin(username)
    return coin
}

module.exports = {
    getCoins
}