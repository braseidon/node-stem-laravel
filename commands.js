/**
 * Dependencies
 */


/**
 * Test if the bot is responsive
 *
 * @param  {String} steamID
 */
exports.ping = function (steamID) {

    var Stem       = this,
        playerName = this.bot.users[steamID].playerName;

    Stem.bot.sendMessage(steamID, 'Pong! Hi ' + playerName + ' !');
    Stem.log.info('[Laravel] Ping! From ', playerName);

};