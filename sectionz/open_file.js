const fs = require("fs").promises;

async function openCreatedFile() {
    try {
        const file = await fs.open("cb.txt", "r");
        console.log("File opened successfully.");
        const data = await file.readFile("utf-8");
        let words = data.split(" ");
        console.log("Word count:", words.length);
        await file.close();
    } catch (err) {
        console.error("Error:", err);
    }
}

openCreatedFile();
