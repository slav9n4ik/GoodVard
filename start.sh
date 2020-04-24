#!/bin/bash

#docker pull slav9n4ik/goodvard:latest
cd /opt
docker load -i goodvard-image.tar
docker rm -f goodvard
docker run -d --name goodvard -p 5000:5000 slav9n4ik/goodvard:latest