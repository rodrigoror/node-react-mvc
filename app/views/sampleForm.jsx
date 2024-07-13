const React = require('react');


class sampleForm extends React.Component {
    render(){
        return (
            <div>
                <form method='get' action='/form/get'>
                    <h3>GET form example</h3>

                    <label>
                        E-mail:
                        <input type="text" name="email" />
                    </label>

                    <input type="submit" value="Submit" />
                </form>

                <form method='post' action='/form/post' style={{marginTop: 30}}>
                    <h3>POST form example</h3>

                    <label>
                        Password:
                        <input type="password" name="password" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

module.exports = sampleForm;
