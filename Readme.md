https://www.codementor.io/@marcoscasagrande/installing-express-nginx-app-on-ubuntu-18-04-with-ssl-using-certbot-pdt44g5gs

Certbot:
Installation

sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository ppa:certbot/certbot
sudo apt update
sudo apt install python-certbot-nginx 
Getting the certificate:

sudo certbot --nginx







certbot certonly --webroot -w /opt/goodvard/client/build -d www.goodvard.ru -d goodvard.ru
service nginx restart

ssl_certificate  /etc/letsencrypt/live/www.goodvard.ru/fullchain.pem
ssl_certificate_key /etc/letsencrypt/live/www.goodvard.ru/privkey.pem

                            
