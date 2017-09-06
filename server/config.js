var config = {
    development: {
        //database: 'mongodb://127.0.0.1/energyMonitorCentral',
        database: 'mongodb://127.0.0.1/angular4',
        // following is mqtt config
        mqttHost: 'mqtt.gushenxing.com',
        mqttPort: 7999,
        mqttsPort: 8883,
        mqttHttpPort: 4000,
        mqttHttpsPort: 4001,
        mqttDatabase: 'mongodb://127.0.0.1/mosca',
        mqttPubsubCollection: 'pubsub',
        mqttClientId: 'platform',
        mqttUsername: 'gushenxingmqttclient',
        mqttPassword: 'gushenxingmqttclientpassword',
        mqttKeepalive: 60,
        mqttEncoding: 'binary',
        mqttKeyFile: 'mqtt.gushenxing.com.server.unencripted.key',
        mqttCrtFile: 'mqtt.gushenxing.com.server.crt',
        mqttCaFile: 'mqtt.gushenxing.com.ca.crt',
        // express server
        expressHttpPort: 5000,
        expressHttpsPort: 8443,
        resourcesPath: __dirname + '/' + 'resources'
    },
    local: {
        //database: 'mongodb://127.0.0.1/energyMonitorCentral',
        database: 'mongodb://127.0.0.1/angular4',
        // following is mqtt config
        mqttHost: 'mqtt.gushenxing.com',
        mqttPort: 7999,
        mqttsPort: 8883,
        mqttHttpPort: 4000,
        mqttHttpsPort: 4001,
        mqttDatabase: 'mongodb://127.0.0.1/mosca',
        mqttPubsubCollection: 'pubsub',
        mqttClientId: 'platform',
        mqttUsername: 'gushenxingmqttclient',
        mqttPassword: 'gushenxingmqttclientpassword',
        mqttKeepalive: 60,
        mqttEncoding: 'binary',
        mqttKeyFile: 'mqtt.gushenxing.com.server.unencripted.key',
        mqttCrtFile: 'mqtt.gushenxing.com.server.crt',
        mqttCaFile: 'mqtt.gushenxing.com.ca.crt',
        // express server
        expressHttpPort: 5000,
        expressHttpsPort: 8443,
        resourcesPath: __dirname + '/' + 'resources'
    },
    production: {
        database: 'mongodb://127.0.0.1/angular4',
        mqttHost: 'mqtt.gushenxing.com',
        mqttPort: 7999,
        mqttsPort: 8883,
        mqttHttpPort: 4000,
        mqttHttpsPort: 4001,
        mqttDatabase: 'mongodb://127.0.0.1/mosca',
        mqttPubsubCollection: 'pubsub',
        mqttClientId: 'platform',
        mqttUsername: 'gushenxingmqttclient',
        mqttPassword: 'gushenxingmqttclientpassword',
        mqttKeepalive: 60,
        mqttEncoding: 'binary',
        mqttKeyFile: 'mqtt.gushenxing.com.server.unencripted.key',
        mqttCrtFile: 'mqtt.gushenxing.com.server.crt',
        expressHttpPort: 5000,
        expressHttpsPort: 8443,
        resourcesPath: __dirname + '/' + 'resources'
    }
};

var env = process.env.NODE_ENV || 'development';

module.exports = function(){
    var returnVal = config[env];
    return returnVal;
};
