// var db = require('../models/nurse');
// var User = user;
// ===============================  Start Nurse object Code   =======================================
var nurseController = require('../controllers/nurseController.js');

module.exports = function(app) {


    app.get('/dashboard', isLoggedIn, nurseController.dashboard);

    // app.post('/nurse', );



    app.post('/dashboard', isLoggedIn, nurseController.schedule);



    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
    }


}

// var isLoggedIn = function isLoggedIn(req, res, next) {
//     if (req.user) {
//         console.log('|||||||||Logged in as ' + req.User + '|||||||');
//         return next();
//     }
//     return res.status(401).json({
//         error: 'User not authenticated'
//     });
// };