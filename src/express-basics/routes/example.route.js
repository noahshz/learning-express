// base route here: /example

const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.status(200).json({status: "fine", message: "This is a sample message"});
});

module.exports = router;