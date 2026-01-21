const fs = require("fs");

// create file synchronously
fs.writeFileSync("example.txt", "Hello, this is a synchronous file!");

console.log("File created successfully");
