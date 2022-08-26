const express = require('express');
const app = express();

let {users} = require('./data');

// parse form data
app.use(express.urlencoded({extended: false}));
// parse json data
app.use(express.json());

// get method
app.get('/api/users', (req,res) => {
    return res.status(200).json(users);
})

// post method
app.post('/api/users/add', (req, res) => {
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({success: false, message: "please enter name"});
    }
    return res.status(201).json({success: true});
})

// put method
app.put('/api/users/edit/:uid', (req,res) => {
    const {uid} = req.params;
    const {name} = req.body;
    const user = users.find((user) => user.id === Number(uid));

    if(!user) {
        return res.status(404).json({success: false, message: "person does not exists"})
    }
    const newUsers = users.map((user) => {
        if(user.id === Number(uid)) {
            user.name = name;
        }
        return user;
    })
    res.status(200).json({success: true, message: "edited succesfully", data: newUsers})
})

// delete method
app.delete('/api/users/delete/:uid', (req,res) => {
    const {uid} = req.params;
    const user = users.find((user) => user.id === Number(uid));

    if(!user) {
        return res.status(404).json({success: false, message: "person does not exists"})
    }
    const newUsers = users.filter((user) => user.id !== Number(uid));
    return res.status(200).json({success: true, message: "deleted succesfully", data: newUsers})
})


app.listen(5000,()=>{
    console.log(`Server is listening on port 5000...`);
})