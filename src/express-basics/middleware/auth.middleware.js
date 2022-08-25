const auth = (req, res, next) => {
    const {user} = req.query;
    if(user === 'noah') {
        req.user = {name:'noah',id:1};
        next();
    } else {
        res.status(401).send('unautherize');
    }
}
module.exports = auth;