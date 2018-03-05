var authController = require('../controllers/authcontroller.js');
var db = require("../models");




module.exports = function(app, passport) {

    app.get('/signup', authController.signup);


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: "/dashboard",
        failureRedirect: '/signup'
    }));


    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    }));


    app.get('/signin', authController.signin);


    app.get('/logout', authController.logout)




    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
    }


}