var ParseDashboard = require('parse-dashboard');
var dashboard = new ParseDashboard({
"apps": [{
"serverURL":$config.serverURL,
"appId": "xuzhuoqing",
"masterKey": "xzq19940315",
"appName": "parseRole"}]
});

module.exports=dashboard;