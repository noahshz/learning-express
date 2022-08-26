const express = require('express');
const app = express();
const CONFIG = require('./configs/general.config');
const mongoose = require('mongoose');
const checkApiKey = require('./middleware/apikey.middlware');

// routes
const user_route = require('./routes/user.route');

// app.use
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(checkApiKey);
app.use('/users', user_route);

// start app
app.listen(CONFIG.SRV_PORT, () => {
    console.log(`server is running on port ${CONFIG.SRV_PORT}...`);
});