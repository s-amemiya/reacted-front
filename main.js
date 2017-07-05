var express = require('express')
var path = require('path')
var app = express()

var dist = path.join(__dirname, 'dist')
console.log(dist)
app.use(express.static(dist))

var port = 3000
app.listen(port)
console.log('listen on port ' + port)
