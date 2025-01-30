const express = require('express');
const todos = require('./todo')
const app = express();
const port = 8080;

// Create a persistent list of 33 todos
// const todos = Array.from({ length: 33 }, (_, i) => ({
//     id: i + 1,
//     title: `Todo ${i + 1}`,
//     completed: Math.random() < 0.5, // Random true/false
// }));

app.get('/todos', (req, res) => {
    const start = parseInt(req.query.start) || 1;
    const end = parseInt(req.query.end) || 33;

    // Validate start and end
    if (start < 1 || end > 33 || start > end) {
        return res.status(400).json({ error: "Invalid start or end range" });
    }

    res.json(todos.slice(start - 1, end));
});

app.listen(port, () => {
    console.log(`Todo API running at http://localhost:${port}`);
});
