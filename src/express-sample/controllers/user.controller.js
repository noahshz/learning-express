const getUser = (req, res) => {
    res.status(200).json({message: "view all users"});
}
const createUser = (req, res) => {
    const body = req.body;
    res.status(200).json({message: "create new user"});
}
module.exports = {
    getUser,
    createUser
}