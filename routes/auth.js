var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

    app.get('/signup', authController.signup);


    app.get('/signin', authController.signin);


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/availability',
        failureRedirect: '/signup'
    }));


    app.get('/availability', isLoggedIn, authController.dashboard);

    app.get('/nurses', isLoggedIn, authController.dashboard);
    app.get('/patients', isLoggedIn, authController.dashboard);

    // app.get('/nurses', isLoggedIn, authController.availability);
    // app.get('/patients', isLoggedIn, authController.availability);



    app.get('/logout', authController.logout);


    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/availability',
        failureRedirect: '/signin'
    }));


    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
    }


}