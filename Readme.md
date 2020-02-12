https://www.codementor.io/@marcoscasagrande/installing-express-nginx-app-on-ubuntu-18-04-with-ssl-using-certbot-pdt44g5gs

certbot certonly --webroot -w /opt/goodvard/client/build -d www.goodvard.ru -d goodvard.ru
service nginx restart

ssl_certificate  /etc/letsencrypt/live/www.goodvard.ru/fullchain.pem
ssl_certificate_key /etc/letsencrypt/live/www.goodvard.ru/privkey.pem

                            
