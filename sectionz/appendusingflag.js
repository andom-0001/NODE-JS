const fs = require("fs");

fs.open("read.txt", "a", (err, fd) => {
    if (err) {
        console.log("Error opening file:", err);
        return;
    }

    const data = "\nThis line is appended using a flag";

    fs.write(fd, data, (err) => {
        if (err) {
            console.log("Error writing file:", err);
            return;
        }

        console.log("Data appended successfully");

        fs.close(fd, () => {
            console.log("File closed");
        });
    });
});