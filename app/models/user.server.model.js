var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');

var UserSchema = new Schema({
        name: String,
        email: {
            type: String,
            index: true
        },
        username: {
            type: String,
            unique: true,
            trim: true
        },
        password: String,
        grid: {},
        spriteX: String,
        spriteY: String,
        logs: String,
        stone: String,
        houses: String,
        population: String,
        farms: String,
        food: String,
        provider: String,
        providerId: String,
        providerData: {}, 
        Users: {}    
});

UserSchema.pre('save',
    function(next) {
        if(this.password) {
            var md5 = crypto.createHash('md5');
            this.password = md5.update(this.password).digest('hex');
        }
        
        next();
    });

UserSchema.methods.authenticate = function(password) {
	var md5 = crypto.createHash('md5');
	md5 = md5.update(password).digest('hex');

	return this.password === md5;
};

UserSchema.statics.findUniqueUsername = function(username, suffix, callback) {
	var _this = this;
	var possibleUsername = username + (suffix || '');

	_this.findOne(
		{username: possibleUsername},
		function(err, user) {
			if (!err) {
				if (!user) {
					callback(possibleUsername);
				}
				else {
					return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
				}
			}
			else {
				callback(null);
			}
		}
	);
};


mongoose.model('User', UserSchema);