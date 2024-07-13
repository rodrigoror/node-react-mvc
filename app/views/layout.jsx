const React = require('react'),
    App = require('../core/App');

class Layout extends React.Component {

    render() {
        const Page = require('./' + this.props.fileName);

        return (
            <html>
            <head>
                <meta charSet='UTF-8'/>
                <title>{ App.param('projectName') }</title>
            </head>
            <body>
                <h1>Layout</h1>
                <Page {...this.props.dataProvider} />


                <section dangerouslySetInnerHTML={{__html: App.genCss()}} />

                <section dangerouslySetInnerHTML={{__html: App.genLess()}} />

                <section dangerouslySetInnerHTML={{__html: App.genJs()}} />
            </body>
            </html>
        );
    }
}

module.exports = Layout;
