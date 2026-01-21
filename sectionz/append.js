const fs = require("fs");

// append data asynchronously
fs.appendFile("example.txt", "\nThis line is appended asynchronously", (err) => {
    if (err) {
        console.log("Append error:", err);
        return;
    }
    console.log("Data appended (async)");
});

console.log("Program running...");
