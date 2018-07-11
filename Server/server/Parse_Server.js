var ParseServer = require('parse-server').ParseServer;


var api = new ParseServer({
"appId": "xuzhuoqing",
"masterKey": "xzq19940315",
"appName": "parseRole",
"databaseURI":$config.databaseURI,
"serverURL":$config.serverURL,
"liveQuery": {
    classNames: ['Book']
  }
});

module.exports=api;
