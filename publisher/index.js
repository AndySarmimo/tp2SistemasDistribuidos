const mqtt = require('mqtt')
//  const client  = mqtt.connect('mqtt://'+ process.env.HOST)
const client  = mqtt.connect('mqtt://'+process.env.HOST+':'+process.env.PORT)
 //const client  = mqtt.connect("mqtt://192.168.1.86:1883")

// print process.argv
// process.argv.forEach(function (val, index, array) {
//     console.log(index + ': ' + val);
// });

console.log(process.argv[2])

function ConnectEvent(){
    client.publish(process.env.TOPIC, process.argv[2])
    client.end()
}

function MessageEvent(){

    console.log(message.toString())
    client.end()
}


client.on('connect', ConnectEvent)
client.on('message',MessageEvent)

