const os = require('os');
var freeMem = os.freemem();
var totalMem = os.totalmem();

console.log("Memory Free : " + freeMem);
console.log("Memory used : " + totalMem);