#!/bin/bash

docker network create mis-libros-net
docker run -it --rm -p 1883:1883 -d --network mis-libros-net --name broker -v $PWD/broker/mosquitto.conf:/mosquitto/config/mosquitto.conf eclipse-mosquitto

