var fs = require('fs');
var path = require('path');

var pathName = process.argv[2];
var ext = '.' + process.argv[3];

var list = fs.readdir(pathName, function (err, list) {
	list.forEach(function (file) {
	var filextname = path.extname(file);
		if (filextname === ext)
			console.log(file);
	})
});