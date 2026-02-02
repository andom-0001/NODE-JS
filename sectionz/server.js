const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {
    res.send("<h1>Welcome to express js <h1>");
});

app.get("/view", (req, res) => {
    res.send("This is view page updated ");
});

app.get("/about", (req, res) => {
    res.send("This is about page");
});
app.get("/register", (req, res) => {
    res.send(
    ` <form action="/submit" method="POST">
        <input type="text" placeholder="Username"/>
        <button type="submit">Submit</button>
    </form>
    `

    );
});
app.post("/submit",(req,res)=>{
    console.log(req.body);
    res.send("Form submitted successfully");
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});

console.log(`http://localhost:${port}`);
