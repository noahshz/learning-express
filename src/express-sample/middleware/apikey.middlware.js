const check_api_key = (req, res, next) => {
    if(!req.get("API-Key")) {
        return res.status(403).json({message: "no api key found"});
    } else {
        
    }
    next();
}
module.exports = check_api_key;