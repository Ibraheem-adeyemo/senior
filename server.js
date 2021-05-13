const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT|| 4500;

app.use(express.static('public'));

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT);