"use strict";
var express = require("express")
	, logfmt = require("logfmt")
	, fs = require('fs')
	, app = express();
var Facebook = require('facebook-node-sdk');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var port = Number(process.env.PORT || 5000);

var index = fs.readFileSync('index.html');
//app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: 'ewewq bar' }));
app.use(logfmt.requestLogger());
app.use(Facebook.middleware({ appId: '635617779878563', secret: '5d1fdfd275fef5abd6cbdfcb9c703616' }));

app.listen(port, function () {
	console.log("Listening on " + port);
});

app.get('/', Facebook.loginRequired(), function (req, res) {
	req.facebook.api('/', function(err, user) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Hello, ' + user.name + '!');
	});
	//res.end(index);
});
