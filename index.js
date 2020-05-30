const express = require('express');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 5000


app.get('/schools', (req, res) => {
    res.status(200).json({text: "showing all schools"})
    res.send("home route")
});

app.post('/schools', (req, res) => {
    res.status(200).json({text: "create new school"})
    res.send("adding a new school")
});

app.put('/schools/:id', (req, res) => {
    res.status(200).json({text: `Update info on an existing school in the DB ${req.params.id}`});
    res.send("update school info")
});

app.delete('/schools/:id', (req, res) => {
    res.status(200).json({text: `delete an existing school in the DB ${req.params.id}`});
    res.send("update school info")
});



app.listen(PORT, console.log(`listening on port ${PORT}`));
