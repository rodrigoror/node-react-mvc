'use strict';

const Router = require('./core/Router');

function bootstrap(req, res) { //Response and request is needed for template loading in View class
    return Router.Launch(req, res);
}

module.exports = bootstrap;