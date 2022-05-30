const mqtt = require('mqtt')
//  const client  = mqtt.connect('mqtt://'+ process.env.HOST)
const client  = mqtt.connect('mqtt://'+process.env.HOST+':'+process.env.PORT)
 //const client  = mqtt.connect("mqtt://192.168.1.86:1883")



function ConnectEvent(){
    

    setInterval(
        function(){
            

            const os = require('os');
            const add = require('address');
           
            
            console.log("ip add ", add.ip())

            var jsonFile = JSON.stringify(
                {time: new Date().toISOString(),
                    container: os.hostname(),
                    ip: add.ip()
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

