FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm ci --only=production

COPY . .

EXPOSE 5000

CMD [ "node", "src/index.js" ]
