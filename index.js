const express = require('express');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 5000


app.get('/schools', (req, res) => {
    res.send("home route")
    res.json({text: "showing all schools"})
});

app.post('/schools', (req, res) => {
    res.send("adding a new school")
    res.json({text: "add a school to the DB"})
});

app.put('/schools/:id', (req, res) => {
    res.send("update school info")
    res.json({text: `add to an existing school in the DB ${req.params.id}`});
});

app.delete('/schools/:id', (req, res) => {
    res.send("update school info")
    res.json({text: `delete an existing school in the DB ${req.params.id}`});
});



app.listen(PORT, console.log(`listening on port ${PORT}`));
