var exports = module.exports = {}
var db = require("../models");


exports.make = function(req, res) {

    res.render("signup");

}


exports.schedule = function(req, res) {
    db.nurse.create({
        sunday1: req.body.sunday1,
        sunday2: req.body.sunday2,
        sunday3: req.body.sunday3,
        monday1: req.body.monday1,
        monday2: req.body.monday2,
        monday3: req.body.monday3,
        tuesday1: req.body.tuesday1,
        tuesday2: req.body.tuesday2,
        tuesday3: req.body.tuesday3,
        wednesday1: req.body.wednesday1,
        wednesday2: req.body.wednesday2,
        wednesday3: req.body.wednesday3,
        thursday1: req.body.thursday1,
        thursday2: req.body.thursday2,
        thursday3: req.body.thursday3,
        friday1: req.body.friday1,
        friday2: req.body.friday2,
        friday3: req.body.friday3,
        saturday1: req.body.saturday1,
        saturday2: req.body.saturday2,
        saturday3: req.body.saturday3
    }).then(function(dbnurses) {
        res.render("dashboard", {
            sunday1: dbnurses.sunday1,
            sunday2: dbnurses.sunday2,
            sunday3: dbnurses.sunday3,
            monday1: dbnurses.monday1,
            monday2: dbnurses.monday2,
            monday3: dbnurses.monday3,
            tuesday1: dbnurses.tuesday1,
            tuesday2: dbnurses.tuesday2,
            tuesday3: dbnurses.tuesday3,
            wednesday1: dbnurses.wednesday1,
            wednesday2: dbnurses.wednesday2,
            wednesday3: dbnurses.wednesday3,
            thursday1: dbnurses.thursday1,
            thursday2: dbnurses.thursday2,
            thursday3: dbnurses.thursday3,
            friday1: dbnurses.friday1,
            friday2: dbnurses.friday2,
            friday3: dbnurses.friday3,
            saturday1: dbnurses.saturday1,
            saturday2: dbnurses.saturday2,
            saturday3: dbnurses.saturday3
        });
    });
}

exports.dashboard = function(req, res, dbnurses) {

    res.render("dashboard", {
        sunday1: dbnurses.sunday1,
        sunday2: dbnurses.sunday2,
        sunday3: dbnurses.sunday3,
        monday1: dbnurses.monday1,
        monday2: dbnurses.monday2,
        monday3: dbnurses.monday3,
        tuesday1: dbnurses.tuesday1,
        tuesday2: dbnurses.tuesday2,
        tuesday3: dbnurses.tuesday3,
        wednesday1: dbnurses.wednesday1,
        wednesday2: dbnurses.wednesday2,
        wednesday3: dbnurses.wednesday3,
        thursday1: dbnurses.thursday1,
        thursday2: dbnurses.thursday2,
        thursday3: dbnurses.thursday3,
        friday1: dbnurses.friday1,
        friday2: dbnurses.friday2,
        friday3: dbnurses.friday3,
        saturday1: dbnurses.saturday1,
        saturday2: dbnurses.saturday2,
        saturday3: dbnurses.saturday3
    });
}

exports.logout = function(req, res) {

    req.session.destroy(function(err) {
        res.redirect('/');
    });

}