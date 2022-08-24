const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/',(req,res) => {

});

app.all('*',(req,res) => {
    res.status(404).send('404 not found');
});

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}...`);
});