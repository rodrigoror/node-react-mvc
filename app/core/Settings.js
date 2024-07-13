class Settings {
    constructor() {
        // Set up your MVC manifest
        module.manifest = {
            "projectName": "MVC in Node.js (including React)",
            // Styles and scripts include from /assets
            "less": ['main'],
            "css": ['main'],
            "js": [
                'main',
                '../libs/less.min'
            ]
        };
    }

    static getInstance() {
        if (!module._instance)
            module._instance = new Settings;

        return module._instance;
    }

    param(name, value = null) {
        if (value == null)
            return typeof module.manifest[name] == "undefined"
                ? null
                : module.manifest[name];

        return module.manifest[name] = value;
    }
}

module.exports = Settings;