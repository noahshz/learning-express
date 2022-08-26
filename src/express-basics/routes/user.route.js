// Router for /api/users....
// for routes -> remove base path: /api/users
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');

const {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../controller/users.controller');


//router.get('/', MIDDLEWRE, CONTROLELRFUNCTION);
router.get('/',getUsers)
router.post('/add', createUser)
router.put('/edit/:uid', updateUser)
router.delete('/delete/:uid', deleteUser)

// example syntax
// router.route('/').get(functoget).post(functopost)

// exports router
module.exports = router;