const express = require('express');
const app = express();
let {users} = require('./data');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// get method
app.get('/api/users', (req,res) => {
    return res.status(200).json(users);
})

app.listen(5000,()=>{
    console.log(`Server is listening on port 5000...`);
})