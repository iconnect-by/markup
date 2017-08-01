FROM nginx:alpine
MAINTAINER Alexander Sergeychik <alexander@isolutions.by>

COPY    dist                /usr/share/nginx/html
COPY    node_modules        /usr/share/nginx/html/node_modules