FROM ubuntu
USER root
RUN apt-get update && apt-get upgrade &&\
    apt-get install curl -y &&\
    curl -sL https://deb.nodesource.com/setup_10.x | bash - &&\
    apt-get install git-core -y &&\
    apt-get install nodejs -y
WORKDIR /opt
RUN git clone https://github.com/slav9n4ik/GoodVard
WORKDIR /opt/GoodVard/goodvard
RUN npm install && npm install nodemon
WORKDIR /opt/GoodVard/goodvard/client
RUN npm install && npm run-script build
EXPOSE 5000
CMD npm run-script server --prefix /opt/GoodVard/goodvard