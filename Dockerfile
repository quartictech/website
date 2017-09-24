FROM nginx:1.13.5-alpine

ADD dist/ /usr/share/nginx/html/
ADD default.conf /etc/nginx/conf.d/default.conf
