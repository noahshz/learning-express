const examplefunc = (req, res) => {
    res.status(200).json({status: "fine", message: "This is a sample message"});
}

module.exports = {
    examplefunc
}