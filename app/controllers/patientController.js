var exports = module.exports = {}
var db = require("../models");


exports.make = function(req, res) {

    res.render("signup");

}


exports.portal = function(req, res, dbpatients) {


    console.log("portal route in patient controller");
    // console.log("body", req.body);

    db.patient.create({
        first: req.body.first,
        last: req.body.last,
        condition: req.body.condition,
        gender: req.body.gender,
        patientId: req.body.patientId,
    }).then(function(dbpatient) {
        db.patient.findAll({


        }).then(function(dbpatient) {

            console.log("////////// dbpatients object", dbpatient);
            res.render("portal", {
                dbpatients: dbpatient,
                first: req.body.first,
                last: req.body.last,
                condition: req.body.condition,
                gender: req.body.gender,
                patientId: req.body.patientId

            });


        })

    });
}

exports.patient = function(req, res, dbpatients) {


    console.log("findAll patient function");
    db.patient.findAll({


    }).then(function(dbpatients) {
        console.log(dbpatients);
        res.render("portal", {
            dbpatients: dbpatients,
            first: req.body.first,
            last: req.body.last,
            condition: req.body.condition,
            gender: req.body.gender,
            patientId: req.body.patientId
        })
    });



}

exports.logout = function(req, res) {

    req.session.destroy(function(err) {
        res.redirect('/');
    });

}