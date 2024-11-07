const app = require("./app");
const config = require("./config/config");
const http = require("http");
const fs = require("fs");

var key = fs.readFileSync("./certs/sade.key");
var cert = fs.readFileSync("./certs/sade.crt");
var options = {
  key: key,
  cert: cert,
};

console.log("Hello Sekolah Alam!");
// require('./cronJobs');
// eslint-disable-next-line import/order
// const http = require("http");
// socket initialization
// const server = http.createServer(app);
const server = http.createServer(options, app);
// eslint-disable-next-line import/order
const io = require("socket.io")(server, { cors: { origin: "*" } });

global.io = io;
require("./config/rootSocket")(io);

server.listen(config.port, () => {
  console.log("SERVER");
  console.log(`Listening to port ${config.port}`);
});

// Test CD