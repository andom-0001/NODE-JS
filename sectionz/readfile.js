const fs = require("fs");

// 🔹 Synchronous Read
console.log("---- Synchronous Read Start ----");
const syncData = fs.readFileSync("read.txt", "utf-8");
console.log(syncData);
console.log("---- Synchronous Read End ----\n");

// 🔹 Asynchronous Read
console.log("---- Asynchronous Read Start ----");
fs.readFile("read.txt", "utf-8", (err, asyncData) => {
    if (err) {
        console.log("Error:", err);
        return;
    }
    console.log(asyncData);
    console.log("---- Asynchronous Read End ----");
});

console.log("Program Finished (Async abhi bhi chal raha hai)");
