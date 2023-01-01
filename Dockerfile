FROM node:18
WORKDIR /app
COPY package.json /server
RUN npm install
COPY . /app
CMD node server.js
EXPOSE 8906