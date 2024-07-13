const Controller = require('../core/Controller'),
    App = require('../core/App');

class MainController extends Controller {
    action_index(res) {
        // Add custom assets example
        // App.addCss(['style_new', 'table_style']);
        // App.addCss('jquery');

        this.View.render(res, 'main', {message: 'Message from controller'});
    }

    action_form(res) {
        this.View.render(res, 'sampleForm');
    }

    action_404(res) {
        this.View.render(res, 'errors/404');
    }
}

module.exports = MainController;
