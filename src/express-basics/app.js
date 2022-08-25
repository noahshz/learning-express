const express = require('express');
const app = express();

// request => middleware => response
// imports middleware function
const logger = require('./middleware/logger.middleware');

// middleware function will be passed before default callback function
app.get("/", logger, (req,res) => {
    res.json({message: "welcome"});
});

app.get("/about", logger, (req,res) => {
    res.json({message: "all about me"});
});


app.listen(5000,()=>{
    console.log(`Server is listening on port 5000...`);
})