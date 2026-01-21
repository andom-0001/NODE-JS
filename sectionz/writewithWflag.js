const fs = require("fs");

fs.open("example.txt", "w", (err, fd) => {
    if (err) {
        console.log("Error opening file:", err);
        return;
    }

    const data = "This data is written using w flag";

    fs.write(fd, data, (err) => {
        if (err) {
            console.log("Error writing file:", err);
            return;
        }

        console.log("Data written successfully");

        fs.close(fd, () => {
            console.log("File closed");
        });
    });
});