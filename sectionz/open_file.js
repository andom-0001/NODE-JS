const fs = require("fs").promises;

async function openCreatedFile() {
    try {
        const fileHandle = await fs.open("cb.txt", "r");
        console.log("File opened successfully");

        const data = await fileHandle.readFile("utf-8");
        console.log("File data:", data);

        await fileHandle.close();
        console.log("File closed successfully");

    } catch (error) {
        console.log("Error:", error.message);
    }
}

openCreatedFile();