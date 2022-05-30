const mqtt = require('mqtt')
//  const client  = mqtt.connect('mqtt://'+ process.env.HOST)
const client  = mqtt.connect('mqtt://'+process.env.HOST+':'+process.env.PORT)
 //const client  = mqtt.connect("mqtt://192.168.1.86:1883")


console.log(process.argv[2])

function ConnectEvent(){
    

    setInterval(
        function(){
            var ipAdd ;

            const os = require('os');
            // console.log("os hostname", os.hostname() );
        
        
            require('dns').lookup(require('os').hostname(), function (err, add, fam) {
                // console.log('addr: ' + add);
                ipAdd = add
            })
              
            
            var date = new Date().toISOString();


            var jsonFile = 
            {time1: new Date().toISOString(),
                containerId: os.hostname,
            ip1: ipAdd
            };

            var jsonFile2 = 
                    {time: new Date().toISOString(),
                        container: os.hostname,
                    ip: ipAdd
                    };
            
            console.log(jsonFile)
            console.log(jsonFile2)
        
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

