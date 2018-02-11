var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

    app.get('/', authController.signup);


    app.get('/', authController.signin);


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/availability',
        failureRedirect: '/'
    }));


    app.get('/schedule', isLoggedIn, authController.dashboard);

    app.get('/availability', isLoggedIn, authController.dashboard);

    app.get('/patients', isLoggedIn, authController.dashboard);

    app.get('/nurses', isLoggedIn, authController.dashboard);

    app.get('/logout', authController.logout);


    app.post('/', passport.authenticate('local-signin', {
        successRedirect: '/schedule',
        failureRedirect: '/'
    }));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/schedule');
    }


}