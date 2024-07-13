const Settings = require('./Settings');

Array.prototype.unique = function() {
    let a = this.concat();
    for(let i=0; i<a.length; ++i) {
        for(let j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

class App {
    // Merges custom scripts with default; Also there is asset render methods

    static addJs(arr){
        Settings.getInstance().param(
            'js',
            Settings.getInstance().param('js').concat(Array.isArray(arr) ? arr : Array(arr)).unique()
        );
    }

    static addCss(arr){
        Settings.getInstance().param(
            'css',
            Settings.getInstance().param('css').concat(Array.isArray(arr) ? arr : Array(arr)).unique()
        );
    }

    static addLess(arr){
        Settings.getInstance().param(
            'less',
            Settings.getInstance().param('less').concat(Array.isArray(arr) ? arr : Array(arr)).unique()
        );

    }

    static genJs(){
        let output = "";

        for(let i = 0; i < Settings.getInstance().param('js').length; i++){
            output += "<script src='/assets/js/" + Settings.getInstance().param('js')[i] +".js'></script>";
        }

        return output;
    }

    static genCss(){
        let output = "";

        for(let i = 0; i < Settings.getInstance().param('css').length; i++){
            output += "<link href='/assets/css/" + Settings.getInstance().param('css')[i] +".css' rel='stylesheet' type='text/css'>";
        }

        return output;
    }

    static genLess(){
        let output = "";

        for(let i = 0; i < Settings.getInstance().param('less').length; i++){
            output += "<link href='/assets/less/" + Settings.getInstance().param('less')[i] +".less' rel='stylesheet/less' type='text/css'>";
        }

        return output;
    }

    static param(name, value = null){
        return Settings.getInstance().param(name, value);
    }
}

module.exports = App;