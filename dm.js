
var fs = require('fs');

module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, files) {
		if (err) {
			return callback(err);
		} else {
			return callback(null, files.filter(function(element) {
				return (element.indexOf("."+ext) > -1);
			}));
		}
	});
}