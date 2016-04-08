//first argument *directory name
//second arg extension filter
//prints a list of files in given directory 1x1


//module file
//exports single fxn that takes 3 args: dir name, filename extension string, callback fxn
//callback fxn uses idiomatic node(err, data) convention. first arg to be called back is null, second is data (Array)

//fs.readdir() ... if you receive an error from your call the callback must be called w the error and only the error as first arg

var mod = require("./dm");
var directory = process.argv[2], extension = process.argv[3];
mod(directory, extension, function(err, data) {
	if (err) return console.error("there was an error: ", err);
	
	for (var i = 0; i < data.length; i++) {
		console.log(data[i]);
	};
});




