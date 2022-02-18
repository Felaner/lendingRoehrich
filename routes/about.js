'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('about', {
        title: 'О компании',
        isHome: true
    });
});

module.exports = router;