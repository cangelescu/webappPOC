var express = require('express');
var app = express();

app.get('/', function (reg,res){
	res.send('Hello world frontend!');
});

app.use('/webapp',express.static('webapp'));
app.listen(3002,function(){
	console.log('Server started on port 3002!');
});