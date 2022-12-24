const bcrypt = require('bcrypt');

const { HASH_ROUNDS } = require('../constants')

const createHash = function(key) {
    bcrypt.genSalt(HASH_ROUNDS, function(err, salt) {
        if (err) throw err;

        bcrypt.hash(key, salt, function(err, hash) {
            if (err) throw err;

            return hash;
        });
    });    
}

module.exports = {
    createHash,
};