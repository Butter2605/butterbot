const mineflayer = require('mineflayer')

module.exports = {
    name: 'ping',
    description: 'Xem ping của bạn',
    /**
     * 
     * @param {mineflayer.Bot} bot 
     * @param {String} user 
     * @param {String[]} args 
     */
    async run(bot, user, args) {
        let playerPing = bot.players[user].ping;
        bot.whisper(user, `Ping của ${user} hiện tại là: ${playerPing}ms`)
    }
}