app.get('/', (req, res) => {
    res.status(200).json({text: "showing all schools"})
    res.send("home route")
});

app.post('/', (req, res) => {
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
