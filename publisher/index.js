const mqtt = require('mqtt')

const client  = mqtt.connect('mqtt://'+process.env.HOST+':'+process.env.PORT)
 

const moment = require('moment');

const os = require('os');
const add = require('address');

function ConnectEvent(){
    

    setInterval(
        function(){
            
            let now = new Date();

            var jsonFile = JSON.stringify(
                {time: moment(now).format('ddd MMMM DD h:MM:ss a yyyy' ) ,
                    container: os.hostname(),
                    ip: add.ip()
                }
            );

           
            console.log(JSON.parse(jsonFile))
        
            client.publish(process.env.TOPIC, jsonFile)
    
    
    },5000);


    
    
    // setInterval(() =&gt;  console.log("Message published"), 3000)); 


    //client.end()
}

function MessageEvent(){

    console.log(message.toString())
    //client.end()
}


client.on('connect', ConnectEvent)
client.on('message',MessageEvent)

