FROM node:18.20.4

RUN mkdir /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm update
RUN npm install
EXPOSE 3001
EXPOSE 9229
ENTRYPOINT ["npm", "start"]