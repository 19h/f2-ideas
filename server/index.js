var koa = require('koa');
var app = koa();

module.exports = app;

/* Dependencies */

// middleware
app.gzip = require('koa-gzip');
app.conditionalGet = require('koa-conditional-get');
app.etag = require('koa-etag');
app.static = require('koa-static');

// runtime
app.level = require('level');

/* bootstrap */

require('./misc/bootstrap');

/* Services */

app.use(function *(next){
	
});

app.listen(3000);