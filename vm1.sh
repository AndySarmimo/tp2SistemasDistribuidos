
#!/bin/bash


#docker network create mis-libros-net


# Broker
#docker run -it --rm -p 1883:1883 -d --network mis-libros-net --name broker -v $PWD/broker/mosquitto.conf:/mosquitto/config/mosquitto.conf eclipse-mosquitto

#docker run -it --rm -p 21212:1883 -d --network mis-libros-net --name broker -v $PWD/broker/mosquitto.conf:/mosquitto/config/mosquitto.conf eclipse-mosquitto



# Nodejs publishers

cd publisher/
docker build . -t image-publisher:1.0.0
VAR1="libros"

docker run -e PORT=1883 --rm -d -e TOPIC="${VAR1}/fantasia" -e HOST='broker' --network mis-libros-net --name pub_fantasia image-publisher:1.0.0 
docker run -e PORT=1883 --rm -d -e TOPIC="${VAR1}/romance" -e HOST='broker' --network mis-libros-net --name pub_romance image-publisher:1.0.0 
docker run -e PORT=1883 --rm -d -e TOPIC="${VAR1}/suspenso" -e HOST='broker' --network mis-libros-net --name pub_suspenso image-publisher:1.0.0 
docker run -e PORT=1883 --rm -d -e TOPIC="${VAR1}/terror" -e HOST='broker' --network mis-libros-net --name pub_terror image-publisher:1.0.0 
docker run -e PORT=1883 --rm -d -e TOPIC="${VAR1}/comedia" -e HOST='broker' --network mis-libros-net --name pub_comedia image-publisher:1.0.0 


