var exports = module.exports = {}
var db = require("../models");

exports.signup = function(req, res) {
    res.render("signup");

}


exports.signin = function(req, res) {

    res.render("signin");

}



// exports.registerNurse = function(req, res) {

//     db.nurse.findOne({ where: { badgeId: badgeId } }).then(function(nurse) {
//         if (nurse) {
//             return done(null, false);
//         } else {
//             var data = {
//                 badgeId: req.body.badgeId,
//             };
//         }
//         db.nurse.create(data).then(function(data) {

//             console.log("nurse has been registered", data.badgeId);

//         });
//     });
// }




// exports.dashboard = function(req, res) {

//     res.render("dashboard");

// }







// exports.dashboard = function(req, res) {
//     res.render('dashboard');
//     // db.User.findAll({

//     // }).then(function(user) {

//     //     res.render("dashboard", {
//     //         sunday1: user.sunday1,
//     //         sunday2: user.sunday2,
//     //         sunday3: user.sunday3,
//     //         monday1: user.monday1,
//     //         monday2: user.monday2,
//     //         monday3: user.monday3,
//     //         tuesday1: user.tuesday1,
//     //         tuesday2: user.tuesday2,
//     //         tuesday3: user.tuesday3,
//     //         wednesday1: user.wednesday1,
//     //         wednesday2: user.wednesday2,
//     //         wednesday3: user.wednesday3,
//     //         thursday1: user.thursday1,
//     //         thursday2: user.thursday2,
//     //         thursday3: user.thursday3,
//     //         friday1: user.friday1,
//     //         friday2: user.friday2,
//     //         friday3: user.friday3,
//     //         saturday1: user.saturday1,
//     //         saturday2: user.saturday2,
//     //         saturday3: user.saturday3
//     //     });
//     //     // next();
//     // });


exports.logout = function(req, res) {

    req.session.destroy(function(err) {
        res.redirect('/');
    });

}