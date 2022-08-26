let {users} = require('../data');

const getUsers = (req, res) => {
    res.status(200).json({succes: true, data: users});
}
const createUser = (req, res) => {
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({success: false, message: "please enter name"});
    }
    return res.status(201).json({success: true});
}
const updateUser = (req,res) => {
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
}
const deleteUser = (req,res) => {
    const {uid} = req.params;
    const user = users.find((user) => user.id === Number(uid));

    if(!user) {
        return res.status(404).json({success: false, message: "person does not exists"})
    }
    const newUsers = users.filter((user) => user.id !== Number(uid));
    return res.status(200).json({success: true, message: "deleted succesfully", data: newUsers})
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}