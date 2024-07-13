const url = require('url'),
fs = require('fs');

Array.prototype.clean = function(deleteValue) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};

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

String.prototype.ucFirst = function() {
    return this[0].toUpperCase() + this.split('').slice(1).join('').toLowerCase();
};

class Router {

    static Launch(req, res){
        // Path will be like /main/index
        let path = url.parse(req.originalUrl).pathname.split('/').clean('');

        let controllerName = typeof path[0] == "undefined" ? 'MainController' : path[0].ucFirst() + 'Controller',
            actionName = typeof path[1] == "undefined" ? 'action_index' : 'action_' + path[1].toLowerCase();

        if(!fileExists(__dirname + '/../controllers/' + controllerName + '.js'))
            return Router.ErrorPage404(res);
        else
            module.controller = require(__dirname + '/../controllers/' + controllerName);

        module.controller = new module.controller;

        if (eval('typeof module.controller.' + actionName + ' == "undefined"'))
            return Router.ErrorPage404(res);
        else
            eval('module.controller.' + actionName + '(res, req)');

        return 'Launched';
    }

    static ErrorPage404(res){
        res.status(404);

        let controller = require('../controllers/MainController');

        controller = new controller;

        controller.action_404(res);

        return 404;
    }
}

module.exports = Router;
