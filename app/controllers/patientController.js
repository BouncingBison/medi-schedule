var exports = module.exports = {}
var db = require("../models");


exports.make = function(req, res) {

    res.render("signup");

}


exports.portal = function(req, res) {
    db.patient.create({
        sunday1: req.body.sunday1,
        sunday2: req.body.sunday2,
        sunday3: req.body.sunday3,
        monday1: req.body.monday1,
        monday2: req.body.monday2,
        monday3: req.body.monday3,

    }).then(function(dbpatients) {
        res.render("dashboard", {
            sunday1: dbnurses.sunday1,
            sunday2: dbnurses.sunday2,
            sunday3: dbnurses.sunday3,
            monday1: dbnurses.monday1,
            monday2: dbnurses.monday2,
        });
    });
}

exports.portal = function(req, res, dbpatients) {

    res.render("dashboard", {
        sunday1: dbnurses.sunday1,
        sunday2: dbnurses.sunday2,
        sunday3: dbnurses.sunday3,
        monday1: dbnurses.monday1,
        monday2: dbnurses.monday2,
        monday3: dbnurses.monday3,

    });
}

exports.logout = function(req, res) {

    req.session.destroy(function(err) {
        res.redirect('/');
    });

}