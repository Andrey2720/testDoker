FROM nginx:alpine

#RUN rm -rf /usr/share/nginx/html/*
EXPOSE 3000
COPY index.html /usr/share/nginx/html/index.html
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]

