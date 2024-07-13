const Document = require('camo').Document,
    crypto = require('crypto'),
    DBase = require('../core/DBase'),
    salt = "k`dbferft@f1hio467ji8hb9gv0;ue";

class Auth {
    static getRole() {
        DBase.getInstance().connect();

        return authSchema.findOne({name: session.currentUser.name}).then(function (data) {
            return data.role;
        });
    }

    static signIn(email, pass, callback) {
        DBase.getInstance().connect(function () {

            const hash = crypto.createHash('sha256', salt).update(pass).digest('hex');

            authSchema.findOne({email}).then(function (data) {
                if (data.hash != hash)
                    return console.log('incorrect pass');

                session.currentUser = {
                    email,
                    name: data.name,
                    role: data.role
                };

                eval(callback)();

                return true;
            });
        });

        return true;
    }

    static signUp(email, pass, name, role, callback) {
        DBase.getInstance().connect(function () {

            const hash = crypto.createHash('sha256', salt).update(pass).digest('hex'),
                user = authSchema.create({name, hash, email, role});

            user.save();

            session.currentUser = { email, name, role };

            eval(callback)();

            return true;
        });

        return true;
    }

    static sendMail(from, to, subject, html){
        const mailer = require('nodemailer').createTransport({
            service: 'gmail',
            auth: {
                user: '',
                pass: ''
            }
        });

        mailer.sendMail({ from, to, subject, html }, function (err, info) {
            if(err) throw err;

            console.log(info);

            return true;
        });

        return true;
    }
}

class authSchema extends Document {
    constructor() {
        super();

        this.name = String;
        this.hash = String;
        this.email = String;
        this.role = String;
    }

    static collectionName(){
        return 'users';
    }
}

module.exports = Auth;