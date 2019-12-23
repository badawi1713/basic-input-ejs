// import data model/skema User yang telah dibuat
const User = require('../models/User');

// Menampilkan halaman utama atau indeks (dan dengan tambahan untuk menampilkan data user yang telah ditambahkan dalam bentuk tabel)
exports.getIndexPage = (req, res, next) => {
    User.find({
    }).then(user => {
        res.render('index', {
            user: user,
            pageTitle: 'Welcome',
            path: '/',

        });

    }).catch(err => {
        console.log(err);
    });
};

// Menampilkan halaman tambah user baru
exports.getAddUserPage = (req, res, next) => {
    res.render('add-user', {
        pageTitle: 'Create New User',
        path: '/create',
    });
};

// Proses tambah user ke database MongoDB (anda bisa menggunakan MongoDB Compass pada jaringan lokal anda, karena saya menggunakan jaringan lokal)
exports.postAddUser = (req, res, next) => {
    const fullname = req.body.fullname;
    const gender = req.body.gender;
    const institution = req.body.institution;
    const address = req.body.address;
    const user = new User({
        fullname: fullname,
        institution: institution,
        gender: gender,
        address: address
    });
    user.save().then(result => {
        console.log("New user created!");
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    });
};