var express = require('express');
var router = express.Router();
const userController = require('../controllers/user')

/* GET => Halaman Indeks. */
router.get('/', userController.getIndexPage);

/* GET => Halaman Tambah User Baru. */
router.get('/create', userController.getAddUserPage);

/* POST => Proses tambah user baru ke database. */
router.post('/create', userController.postAddUser);

module.exports = router;
