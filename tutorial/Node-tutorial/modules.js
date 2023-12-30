const { log } = require("console");
const os = require("os");
const path = require("path");
const fs = require('fs');
const { fileURLToPath } = require("url");

fs.writeFileSync('./result.txt', 'This Message is been appended...', {flag : 'a'})

// const UserInfo = {
//   Name: os.type(),
//   release: os.release(),
//   uptime: os.uptime(),
//   homedir: os.homedir(),
//   totalmemory: os.totalmem(),
//   version: os.version(),
//   paltform: os.platform(),
// };

// console.log(path.basename('tutorial/hello.js'));
// console.log(path.resolve)
// console.log(path.relative);
// console.log(path.dirname);
// console.log(UserInfo);
