const express = require('express');
const session = require('express-session');

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));

// session setup
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('login');
});
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // simple check (demo)
    if (username === 'admin' && password === '123') {
        req.session.isLogged = true;
        return res.redirect('/dashboard');
    }

    res.send('Invalid credentials ❌');
});
app.get('/dashboard', (req, res) => {
    if (req.session.isLogged) {
        return res.render('dashboard');
    } else {
        return res.redirect('/');
    }
});
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});


// server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});