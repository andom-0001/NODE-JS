const fs = require("fs");

// create file synchronously
fs.writeFileSync("read.txt", "Hello, this is a synchronous file!");

console.log("File created successfully");
