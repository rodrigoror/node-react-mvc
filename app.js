'use strict';


const express = require('express'),
    app = express(),
    // Configure app port in your environment
    port = process.env.APP_PORT || 3000,
    router = express.Router(),
    fs = require('fs'),
    url = require('url'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

global.session = require('express-session');

function fileExists(path) {

    try {
        return fs.statSync(path).isFile();
    }
    catch (e) {

        if (e.code === 'ENOENT') {
            return false;
        }

        console.error("Exception fs.statSync (" + path + "): " + e);
        throw e;
    }
}

//Setting up the server

app.listen(port, function () {
    console.info('Server started');
});

//Configuring Express Router

router.all('*', function (req, res) {
    let fullPath = __dirname + req.originalUrl,
        exists = fileExists('.' + url.parse(req.originalUrl).pathname);

    //If file doesn't exist, loading bootstrap script what launches the router
    if (exists)
        res.sendFile(fullPath);
    else
        require('./app/bootstrap')(req, res);
});

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(function (req, res, next) {
    console.log('New request: ', new Date(), req.method, req.url);

    //Disabling cache for using only fresh files
    res.setHeader('Cache-Control', 'No-Cache');

    next();
});

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

session.currentUser = {
    name: 'Guest',
    email: null,
    role: 'guest'
};

app.use('*', router);
