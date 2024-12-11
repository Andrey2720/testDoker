FROM nginx:alpine

#RUN rm -rf /usr/share/nginx/html/*
EXPOSE 3000
COPY . /usr/share/nginx/frontend
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]


