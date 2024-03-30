
FROM node:21

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install


COPY . .


RUN npm run build

EXPOSE 3000


# Run the compiled app
CMD [ "npm", "run", "start", "dev" ]
