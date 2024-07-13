const Controller = require('../core/Controller'),
    App = require('../core/App');

class FormController extends Controller {
    action_post(res, req) {
        this.View.render(res, 'main',
            {message: 'POST data: ' + JSON.stringify(req.body)}
            );
    }

    action_get(res, req) {
        this.View.render(res, 'main',
            {message: 'GET data: ' + JSON.stringify(req.query)}
            );
    }
}

module.exports = FormController;
