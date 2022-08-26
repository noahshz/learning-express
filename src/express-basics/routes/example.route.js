// base route here: /example
const express = require('express');
const router = express.Router();

const {
    examplefunc
} = require('../controller/example.controller');

router.get('/', examplefunc);

// example sync
// router.route('/').get(examplefunc).post(examplefunc2).delete(functodelte)

module.exports = router;