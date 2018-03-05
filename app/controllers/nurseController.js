var exports = module.exports = {}
var db = require("../models");


exports.make = function(req, res) {

    res.render("signup");

}

//  UPDATE  FUNCTION ================================================
exports.schedule = function(req, res) {
        db.nurse.update({
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
        }, {
            // omitting returning: true produces a result in the next step of the promise chain showing only the # of affected row 
            where: {
                badgeId: req.user.badgeId
            },
            individiualHooks: true
                // chain on a new find query that finds data based on where this was making changes and then hand that data to the front end
        })

        // using the afterBulkUpdate hook that is called automatically Sequelize after an update is made. 
        db.nurse.afterBulkUpdate(({ attributes, where, user, dashUpdate }) => {
            // where - in one of the fields of the clone of second argument sent to .update
            // attributes - is one of the fields that the clone of second argument of .update would be extended with
            console.log("req.user afterBulkUpdate", req.user.badgeId);
            console.log("attribute", attributes);
            console.log("where", where);
            console.log("after bulk update");

            function dashUpdate(req, res, attributes) {
                db.nurse.findOne({
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
                }, {
                    // omitting returning: true produces a result in the next step of the promise chain showing only the # of affected row 
                    where: {
                        badgeId: req.user.badgeId
                    },
                    individiualHooks: true
                }).then(function(attributes, where) {
                    console.log("then function of bulk update", req.user.badgeId);
                    res.redirect('/dashboard');
                    // res.render('dashboard', {
                    //     attributes: attributes,
                    //     badgeId: req.user.badgeId,
                    //     sunday1: attributes.sunday1,
                    //     sunday2: attributes.sunday2,
                    //     sunday3: attributes.sunday3,
                    //     monday1: attributes.monday1,
                    //     monday2: attributes.monday2,
                    //     monday3: attributes.monday3,
                    //     tuesday1: attributes.tuesday1,
                    //     tuesday2: attributes.tuesday2,
                    //     tuesday3: attributes.tuesday3,
                    //     wednesday1: attributes.wednesday1,
                    //     wednesday2: attributes.wednesday2,
                    //     wednesday3: attributes.wednesday3,
                    //     thursday1: attributes.thursday1,
                    //     thursday2: attributes.thursday2,
                    //     thursday3: attributes.thursday3,
                    //     friday1: attributes.friday1,
                    //     friday2: attributes.friday2,
                    //     friday3: attributes.friday3,
                    //     saturday1: attributes.saturday1,
                    //     saturday2: attributes.saturday2,
                    //     saturday3: attributes.saturday3
                    // });
                });
            }

        });


    }
    //   END OF UPDATE  FUNCTION ================================================


exports.dashboard = function(req, res, attributes) {

    console.log("req.user FIND", req.user.badgeId);
    db.nurse.findOne({
        badgeId: req.body.badgeId,
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
    }, {
        // omitting returning: true produces a result in the next step of the promise chain showing only the # of affected row 
        where: {
            badgeId: req.user.badgeId
        },
        returning: true,
        individiualHooks: true
    }).then(function(attributes, where) {
        console.log(req.user.badgeId);
        res.render('dashboard', {
            attributes: attributes,
            badgeId: req.user.badgeId,
            sunday1: attributes.sunday1,
            sunday2: attributes.sunday2,
            sunday3: attributes.sunday3,
            monday1: attributes.monday1,
            monday2: attributes.monday2,
            monday3: attributes.monday3,
            tuesday1: attributes.tuesday1,
            tuesday2: attributes.tuesday2,
            tuesday3: attributes.tuesday3,
            wednesday1: attributes.wednesday1,
            wednesday2: attributes.wednesday2,
            wednesday3: attributes.wednesday3,
            thursday1: attributes.thursday1,
            thursday2: attributes.thursday2,
            thursday3: attributes.thursday3,
            friday1: attributes.friday1,
            friday2: attributes.friday2,
            friday3: attributes.friday3,
            saturday1: attributes.saturday1,
            saturday2: attributes.saturday2,
            saturday3: attributes.saturday3
        });
    });
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/signin');
    });

}