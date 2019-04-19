FROM node:11
WORKDIR /usr/app
COPY /src .
RUN npm install
