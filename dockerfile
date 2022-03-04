FROM nginx:latest

RUN curl https://raw.githubusercontent.com/zinedine1210/webix/master/datatable.html> /usr/share/nginx/html/index.html
RUN curl https://raw.githubusercontent.com/zinedine1210/webix/master/data.js> /usr/share/nginx/html/data.js

EXPOSE 80