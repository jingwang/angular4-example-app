var ssl = true;

if(process.argv.length > 2){
    if(process.argv[2] == 'nossl'){
        ssl = false;
    }
}

if(ssl){
    console.log("Running Central Control Platform in SSL mode");
}else{
    console.log("Running Central Control Platform in NONE-SSL mode");
}

var mqttServer = require('./services/mqttServer.js');
var stationStatusListener = require('./services/statusListener.js');
var eventLogListener = require('./services/eventLogListener.js');
var mqttClient = require('./services/mqttClient.js');
//var resourceListener = require('./services/resourceListener.js');
var expressServer = require('./services/expressServer.js');
var cacheStore = require('./services/cacheStore.js');

// start mqtt broker
mqttServer.onAppStart(ssl, function(){
    // start mqtt client
    mqttClient.onAppStart(ssl);
});
// start event log listener
eventLogListener.onAppStart();

// start station status listener
stationStatusListener.onAppStart();

// start resource listener
//resourceListener.onAppStart();

// start cache store
cacheStore.onAppStart();

// start express server
expressServer.onAppStart(ssl);