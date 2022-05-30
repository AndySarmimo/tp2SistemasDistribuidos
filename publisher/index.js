const mqtt = require('mqtt')
//  const client  = mqtt.connect('mqtt://'+ process.env.HOST)
const client  = mqtt.connect('mqtt://'+process.env.HOST+':'+process.env.PORT)
 //const client  = mqtt.connect("mqtt://192.168.1.86:1883")


console.log(process.argv[2])

function ConnectEvent(){
    

    setInterval(
        function(){
            

            const os = require('os');
            const dns = require('dns'); 
            const ip = require('ip');
            // console.log("os hostname", os.hostname() );
            var ipAdd = dns.lookup(os.hostname())
            
            console.log("ip add ", ipAdd)

            var jsonFile = JSON.stringify(
                {time: new Date().toISOString(),
                    container: os.hostname(),
                    ip: ip.address()
                }
            );

           
            console.log(JSON.parse(jsonFile))
        
            client.publish(process.env.TOPIC, jsonFile)
    
    
    },3000);


    
    
    // setInterval(() =&gt;  console.log("Message published"), 3000)); 


    //client.end()
}

function MessageEvent(){

    console.log(message.toString())
    //client.end()
}


client.on('connect', ConnectEvent)
client.on('message',MessageEvent)

