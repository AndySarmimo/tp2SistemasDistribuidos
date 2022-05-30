const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://'+process.env.HOST+':'+process.env.PORT)
 
const moment = require('moment');
const os = require('os');
const add = require('address');


function ConnectEvent(){
    

    setInterval(
        function(){
            
            var jsonFile = JSON.stringify(
                {time: (moment().utcOffset("-04:00").format('ddd MMMM DD h:mm:ss a YYYY')) ,
                    container: os.hostname(),
                    ip: add.ip()
                }
            );

            console.log(JSON.parse(jsonFile))
            client.publish(process.env.TOPIC, jsonFile)
    
    },5000);
}

client.on('connect', ConnectEvent)


