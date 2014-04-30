
var express = require('express'),
	path = require('path'),
	favicon = require('static-favicon'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser');
	
var app = express();

app.set('views', path.join(__dirname, 'tpl'));
app.set('view engine', 'hjs');

app.set('port', process.env.npm_package_config_port || 3000);
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use("/sml", express.static(path.join(__dirname, "sml")));
app.use("/fonts", express.static(path.join(__dirname, "fonts")));
app.use("/js", express.static(path.join(__dirname, "js")));

app.use(require('less-middleware')({ 
	src: path.join(__dirname, ''), 
	force: true
}));
app.use("/css", express.static(path.join(__dirname, "css")));

app.get("/", function(req, res, next) {
	//res.status(404).send("Cannot GET /js/"+req.params.name);
	res.render('index', { });
});

/// error handlers
// 404 handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler, will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler, no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
