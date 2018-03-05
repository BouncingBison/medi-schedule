var nurseController = require('../controllers/nurseController.js');

module.exports = function(app) {

    app.get('/dashboard', isLoggedIn, nurseController.dashboard);

    // app.post('/dashboard', isLoggedIn, nurseController.schedule);

    app.post('/dashboard', isLoggedIn, badgeIdCheck, nurseController.schedule);
    // app.post('/dashboard/:badgeId', isLoggedIn, nurseController.schedule);

    // app.post('/dashbaord', isLoggedIn, nurseController.dashboard);



    function badgeIdCheck(req, res, next) {

        if (req.body.badgeId === req.user.badgeId) {
            return next();
        } else {
            res.redirect('/signin');
        }

    }




    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            console.log("is authenticated");
            return next();
        } else {

            res.redirect('/signin');
        }


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