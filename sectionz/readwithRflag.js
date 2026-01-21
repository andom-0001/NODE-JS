const fs = require("fs");

fs.open("example.txt", "r", (err, fd) => {
    if (err) {
        console.log("Error opening file:", err);
        return;
    }

    const buffer = Buffer.alloc(1024);

    fs.read(fd, buffer, 0, buffer.length, 0, (err, bytesRead) => {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log("File Data:");
        console.log(buffer.toString("utf-8", 0, bytesRead));

        fs.close(fd, () => {
            console.log("File closed");
        });
    });
});