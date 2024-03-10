const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

const fakeDatabase = [
    { username: "sujith@gmail.com", pendingleaves: 6, manager: "krisv" },
    { username: "ananthan@gmail.com", pendingleaves: 6, manager: "krisv" },
    { username: "sachu@gmail.com", pendingleaves: 6, manager: "krisv" }
];

app.get('/getUserDetails', (req, res) => {
    const username = req.query.username;

    if (!username) {
        return res.status(400).json({ statuscode: 400, result: null, message: "Please provide a username query parameter." });
    }

    const user = fakeDatabase.find(user => user.username === username);

    if (user) {
        res.json({ statuscode: 200, result: user, message: "" });
    } else {
        res.status(404).json({ statuscode: 404, result: null, message: "No user found." });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
