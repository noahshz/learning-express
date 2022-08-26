const express = require('express');
const app = express();
const user_router = require('./routes/user.route');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// require router for base path
app.use('/api/users', user_router);


app.listen(5000,()=>{
    console.log(`Server is listening on port 5000...`);
})