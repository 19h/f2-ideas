var koa = require("koa");
var app = koa();

module.exports = app;

require("./misc/bootstrap");

/* Services */

app.use(function *(next){
	
});

app.listen(3000);