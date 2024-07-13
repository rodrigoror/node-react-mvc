const React = require('react');

class Main extends React.Component {
    render() {
        return (
            <pre>{this.props.message}</pre>
        );
    }
}

module.exports = Main;
