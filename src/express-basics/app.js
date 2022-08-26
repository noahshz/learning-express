const express = require('express');
const app = express();

let {users} = require('./data');

// parse form data
app.use(express.urlencoded({extended: false}));
// parse json data
app.use(express.json());

app.get('/api/users', (req,res) => {
    res.status(200).json(users);
})

app.post('/api/users/add', (req, res) => {
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({success: false, message: "please enter name"});
    }
    return res.status(201).json({success: true});
})

app.listen(5000,()=>{
    console.log(`Server is listening on port 5000...`);
})