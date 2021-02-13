const express = require('express');

const app = express();

app.use(express.static('./dist'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/'}),
);

let port = process.env.PORT || 8080
console.log(`Listening on port ${port}...`)
app.listen(port);
