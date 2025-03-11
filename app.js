const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello from Lauboudou updated at 11/03/2025 21h19 !'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
