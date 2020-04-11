FROM ubuntu:latest
USER root

RUN apt-get update -y &&\
    apt-get install curl -y &&\
    curl -sL https://deb.nodesource.com/setup_10.x | bash - &&\
    apt-get install git-core -y &&\
    apt-get install nodejs -y

WORKDIR /opt
RUN git clone https://github.com/slav9n4ik/GoodVard 

WORKDIR /opt/GoodVard
RUN rm -R .git

WORKDIR /opt/GoodVard/goodvard
RUN npm install && npm install nodemon
COPY mail-config-pass.js /opt/GoodVard/goodvard/mail-config-pass.js

WORKDIR /opt/GoodVard/goodvard/client
RUN npm install &&\
    npm run-script build &&\
    rm -R node_modules &&\
    rm -R src &&\
    rm -R public 

EXPOSE 5000
CMD npm run-script server --prefix /opt/GoodVard/goodvard