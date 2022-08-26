// Router for /api/users....
// for routes -> remove base path: /api/users
const express = require('express');
const router = express.Router();

const {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../controller/users.controller');

router.get('/', getUsers)
router.post('/add', createUser)
router.put('/edit/:uid', updateUser)
router.delete('/delete/:uid', deleteUser)

// exports router
module.exports = router;