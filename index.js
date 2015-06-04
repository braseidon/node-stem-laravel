
module.exports = function (Stem) {

    var commands = require('./commands');

    Stem.api.addCommand(/^ping/, commands.ping, { permission: 'normal' });

    Stem.api.addHandler('bot', 'laravel', require('./laravel'));

};
