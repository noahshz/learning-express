const express = require('express');
const app = express();

const path = require('path');

const PORT = process.env.PORT || 5000;

// express define, which ressources will be used -> folder path
app.use(express.static('./public'));

app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname, './samplesite/index.html'));
});

app.all('*',(req,res) => {
    res.status(404).send('404 not found');
});

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}...`);
});