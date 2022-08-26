// base route here: /example
const express = require('express');
const router = express.Router();

const {
    examplefunc
} = require('../controller/example.controller');

router.get('/', examplefunc);

module.exports = router;