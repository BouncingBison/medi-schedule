var patientController = require('../controllers/patientController.js');

module.exports = function(app) {


    app.get('/patients', isLoggedIn, patientController.portal);

    // app.post('/nurse', );



    app.post('/patients', isLoggedIn, patientController.portal);



    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
    }


}