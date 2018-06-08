const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))
const path = require('path')
console.log("hi")
const merge = (directory, destination) => {
	return fs.readdirAsync(directory)
	.map(file => fs.readFileAsync(path.join(directory, file), 'utf8'))
	.then(contents => fs.writeFileAsync(destination, contents.join('\n')))
}
merge("./public/js/routes","./public/js/main.js")