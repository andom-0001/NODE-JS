// Async method
let fs = require('fs');

// Change 'write' to 'writeFile'
fs.writeFile("demo.txt", "welcome to file module", (err) => {
    if (err) {
        console.log("Error creating file");
    } else {
        console.log("demo file created");
    }
});