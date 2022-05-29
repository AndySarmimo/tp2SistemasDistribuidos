const mqtt = require('mqtt')
//  const client  = mqtt.connect('mqtt://'+ process.env.HOST)
const client  = mqtt.connect('mqtt://'+process.env.HOST+':'+process.env.PORT)
 //const client  = mqtt.connect("mqtt://192.168.1.86:1883")


console.log(process.argv[2])

function ConnectEvent(){
    
    var ipAdd ;

    const os = require('os');
    console.log("os hostname", os.hostname() );


    require('dns').lookup(require('os').hostname(), function (err, add, fam) {
        console.log('addr: ' + add);
        ipAdd = add
    })
      
    
    var jsonFile = JSON.stringify(
        {time: new Date().toISOString(),
        container: os.hostname,
        ip: ipAdd
        });

    console.log(JSON.parse(jsonFile))

    client.publish(process.env.TOPIC, process.argv[2])
    
    // setInterval(() =&gt;  console.log("Message published"), 3000)); 


    //client.end()
}

function MessageEvent(){

    console.log(message.toString())
    //client.end()
}


client.on('connect', ConnectEvent)
client.on('message',MessageEvent)

