cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-facebook.CordovaFacebook",
        "file": "plugins/cordova-plugin-facebook/www/CordovaFacebook.js",
        "pluginId": "cordova-plugin-facebook",
        "clobbers": [
            "CordovaFacebook"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-facebook": "0.2.2"
};
// BOTTOM OF METADATA
});