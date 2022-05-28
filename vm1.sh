
#!/bin/bash


# Broker
docker run -it --rm -p 1883:1883 -v $PWD/broker/mosquitto.conf:/mosquitto/config/mosquitto.conf eclipse-mosquitto

# docker run -it --rm -p 21062:1883 -v $PWD/broker/mosquitto.conf:/mosquitto/config/mosquitto.conf eclipse-mosquitto



# Nodejs publishers
