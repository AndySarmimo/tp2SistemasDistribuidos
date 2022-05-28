
#!/bin/bash


docker network create mis-libros-net


# Broker
docker run -it --rm -p 1883:1883 -network mis-libros-net --name broker -v $PWD/broker/mosquitto.conf:/mosquitto/config/mosquitto.conf eclipse-mosquitto

# docker run -it --rm -p 21062:1883 -v $PWD/broker/mosquitto.conf:/mosquitto/config/mosquitto.conf eclipse-mosquitto



# Nodejs publishers

cd publisher/
docker build . -t image-publisher:1.0.0
VAR1="libros"
# for i in {"${VAR1}/fantasia","${VAR1}/romance","${VAR1}/suspenso","${VAR1}/terror", "${VAR1}/comedia"}
# do
docker run -e PORT=1883 -e TOPIC="${VAR1}/fantasia" -e HOST='broker' -network mis-libros-net --name pub_fantasia image-publisher:1.0.0 "Acotar"
docker run -e PORT=1883 -e TOPIC="${VAR1}/romance" -e HOST='broker' -network mis-libros-net --name pub_romance image-publisher:1.0.0 "Boulevard"
docker run -e PORT=1883 -e TOPIC="${VAR1}/suspenso" -e HOST='broker' -network mis-libros-net --name pub_suspenso image-publisher:1.0.0 "El Profesor"
docker run -e PORT=1883 -e TOPIC="${VAR1}/terror" -e HOST='broker' -network mis-libros-net --name pub_terror image-publisher:1.0.0 "El Resplandor"
docker run -e PORT=1883 -e TOPIC="${VAR1}/comedia" -e HOST='broker' -network mis-libros-net --name pub_comedia image-publisher:1.0.0 "Heartstopper"

# echo $i
# done