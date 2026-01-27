let fs = require("fs").promises;
let {promisify} = require("util");
let AnacondaRex = promisify(require("fs").readFile);


fs.writeFile("cb.txt", "This is simple call_back file data", (err) => {
    if (err) {
        console.log("file is loading error", err);
    } else {
        console.log("file is created with simple call_back");
    }
});

async function readFileWithPromises() {
    try {
        let data = await fs.readFile("cb.txt", "utf-8");
        console.log("async file data", data);
    } catch (err) {
        console.log(" async file is loading error", err);
    }
}

readFileWithPromises();

async function readFileWithPromisify() {
    try {
        let filedata = await AnacondaRex("cb.txt", "utf-8");
        console.log("promisify file data", filedata);
    } catch (err) {
        console.log(err);
    }
}
readFileWithPromisify();
