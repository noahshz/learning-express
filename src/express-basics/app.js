const express = require('express');
const app = express();

// request => middleware => response
// imports middleware function
const logger = require('./middleware/logger.middleware');
const auth = require('./middleware/auth.middleware');

// add middleware automaticly to every site
app.use(logger);
// add multiple middleware functions
app.use([logger, auth]);
// add middleware automaticly to specif site
app.use('/api/v1/users', logger);
// add middleware automaticly to every site which begins with:
app.use('/api/v1', logger);

// middleware function will be passed before default callback function manually
app.get("/", logger, (req,res) => {
    res.json({message: "welcome"});
});

app.get("/api/v1/users", (req,res) => {
    res.json({topic: "users"});
});
app.get("/api/v1/items", (req,res) => {
    res.json({topic: "items"});
});


app.listen(5000,()=>{
    console.log(`Server is listening on port 5000...`);
})