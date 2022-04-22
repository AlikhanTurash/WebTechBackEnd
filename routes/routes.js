const express = require('express');
const router = express.Router();

router
    .route("/")
    .get((req, res) => {res.render('index'
    )});
router
    .route("/contact")
    .get((req, res) => {res.render('contact'
    )});
router
    .route("/about")
    .get((req, res) => {res.render('about'
    )});
router
    .route("/watch")
    .get((req, res) => {res.render('watch'
    )});

module.exports = router