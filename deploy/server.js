const express = require('express');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('dist/'));

app.get('/*', function(req,res) {  
  res.sendFile('index.html', { root: 'dist/'}  );
});

let port = process.env.PORT || 8080
console.log(`Listening on port ${port}...`)
app.listen(port);
