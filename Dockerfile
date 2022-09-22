FROM node

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

EXPOSE $API_PORT

CMD [ "node","src/app.js" ]
