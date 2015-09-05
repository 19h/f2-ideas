var app = require("../");

/* Meta */
// Gzip support
app.use(require('koa-gzip')());

// etag & handling
app.use(require('koa-conditional-get')());
app.use(require('koa-etag')());

/* Response time */
app.use(function *(next){
	var start = Date.now();
	
	yield next;
	
	var ms = Date.now() - start;
	
	this.set('X-Response-Time', ms + 'ms');
});

/* Logging */
if (process.ENV.debug) {
	app.use(function *(next){
		var start = new Date;
		yield next;
		var ms = new Date - start;
		console.log('%s %s - %s', this.method, this.url, ms);
	});
}

/* Static files */
app.use(require('koa-static')('../static', {
	// allow downstream services to respond first
	defer: true
}));