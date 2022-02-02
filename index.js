var mosca = require('mosca');

var setting = {
    port: 1883,
    http: {
        port: 8883
    }
}

var server = new mosca.Server(setting)
server.on("ready", setup)

function setup() {
    // server.authenticate = authenticate
    // console.log("moscaserver is up and runing (auth)")
}

// var authenticate = function(client, username, password, callback) {
//     var autorrized = (username === 'mqtt' && password.toString() === 'password')
//     if (autorrized) client.user = username
//     callback(null, autorrized)
// }

server.on('clientConnected', function(client) {
    console.log("Client connected: ", client.id)
})

server.on('published', function(packet, client) {
    console.log(packet)
    console.log("Published", packet.payload.toString())
})