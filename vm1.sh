
#!/bin/bash

# Docker network
docker network create mis-libros-net

#Broker
docker run -it --rm -p 1883:1883 -d --network mis-libros-net --name broker -v $PWD/broker/mosquitto.conf:/mosquitto/config/mosquitto.conf eclipse-mosquitto



# Nodejs publishers

cd publisher/
docker build . -t image-publisher:1.0.0
VAR1="libros"
declare -a topics=(${VAR1}/fantasia ${VAR1}/romance ${VAR1}/suspenso ${VAR1}/terror ${VAR1}/comedia)
declare -a names=(pub_fantasia pub_romance pub_suspenso pub_terror pub_comedia)


for (( j=0; j<5; j++ ));
do
  docker run -e PORT=1883 --rm -d -e TOPIC="${topics[$j]}" -e HOST='broker' --network mis-libros-net --name "${names[$j]}" image-publisher:1.0.0
done
# docker run -e PORT=1883 --rm -d -e TOPIC="${VAR1}/fantasia" -e HOST='broker' --network mis-libros-net --name pub_fantasia image-publisher:1.0.0 
