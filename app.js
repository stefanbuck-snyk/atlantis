const express = require('express');
const request = require('request');
const safeEval = require('safe-eval');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the simple web server!');
});

// Endpoint to evaluate a JavaScript expression safely
app.get('/evaluate', (req, res) => {
    const { expression } = req.query;

    try {
        const result = safeEval(expression);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


// Proxy endpoint to fetch data from a URL
app.get('/proxy', (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    request(url, (error, response, body) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }

        res.send(body);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
