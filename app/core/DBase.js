const connectToDB = require('camo').connect;

// Fill in your MongoDB credentials:
const data = {
    user: '',
    pass: '',
    server: '',
    port: '',
    dbName: '',
    params: ''
};

class DBase {
    connect(callback) {
        return connectToDB(
            `mongodb://${data.user}:${data.pass}@${data.server}${data.port !== '' && `?${data.port}`}/${data.dbName}${data.params !== '' && `?${data.params}`}`
        ).then(function (db) {
                eval(callback)();
            });
    }

    static getInstance() {
        if (!module._instance)
            module._instance = new DBase;

        return module._instance;
    }
}

module.exports = DBase;