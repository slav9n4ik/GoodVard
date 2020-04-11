#!/bin/bash

docker pull slav9n4ik/goodvard:latest
docker run -d --name goodvard -p 5000:5000 slav9n4ik/goodvard:latest