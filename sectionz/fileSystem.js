let fs = require("fs").promises;

fs.writeFile("cb.txt", "This is simple call_back file data", (err) => {
    if (err) {
        console.log("file is loading error", err);
    } else {
        console.log("file is created with simple call_back");
    }
});

async function readFileWithPromises() {
    try {
        await fs.writeFile("promise.txt", "This is simple promise file data");
        console.log("file is created with simple promise");
    } catch (err) {
        console.log("file is loading error", err);
    }
}

readFileWithPromises();
