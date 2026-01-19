const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/') {
        res.write("this is my main home page");
    } else if (req.url === "about_us") {
        res.write("this is my about us page");
    } else if (req.url === "contact_us") {
        res.write("this is my contact us page");
    } else {
        res.write("404 page not found");
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
