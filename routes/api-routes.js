// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models/");
var Week = require("../calendar.js");
// Routes

console.log("api", Week);
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the patients
    // do i need unique routes for this? - yes, if rendering on seperate pages 
    app.get("/api/patient", function(req, res) {

        db.Patient.findAll({

        }).then(function(dbPatients) {
            // console.log(dbPatients);
            // console.log(patient_db.Patients);
            var jsonDate = (new Date()).toJSON();
            console.log(jsonDate);
            res.render("patients", { patient_db: dbPatients, first: dbPatients.first, last: dbPatients.last, admitted: dbPatients.admitted });
        });
        // return dbPatients;
    });

    app.post("/api/patient", function(req, res) {
        return db.Patient.create({
            first: req.body.first,
            last: req.body.last,
            admitted: new Date()
        }).then(function(dbPatients) {
            // console.log(dbPatient);
            var jsonDate = (new Date()).toJSON();
            console.log(jsonDate);
            console.log("we be posting")
            res.render("patients", { patient_db: dbPatients, first: dbPatients.first, last: dbPatients.last, admitted: dbPatients.admitted });
        });
    });
    // DELETE route for deleting Patients. You can access the Patient's id in req.params.id
    app.delete("/api/patient", function(req, res) {

        db.Patient.destroy({
            where: {

            }
        });


    });

    // PUT route for updating todos. The updated todo will be available in req.body
    app.put("/api/patient", function(req, res) {

    });


    // ===============================  Start Nurse object Code   =======================================

    // GET route for getting all of the patients
    // do i need unique routes for this? - yes, if rendering on seperate pages 
    app.get("/api/nurse", function(req, res) {

        db.Nurse.findAll({

        }).then(function(dbNurses) {
            // console.log(dbNurse);
            // console.log(nurse_db.Nurses);
            // var jsonDate = (new Date()).toJSON();
            // console.log(jsonDate);
            console.log(Week);
            res.render("availability", { nurse_db: dbNurses, sunday1: dbNurses.sunday1 });
        });
        // return dbPatients;
    });


    task.title = 'foooo'
    task.description = 'baaaaaar'
    task.save({ fields: ['title'] }).then(() => {
        // title will now be 'foooo' but description is the very same as before
    })

    // The equivalent call using update looks like this:
    db.Nurse.update({ sunday1: req.body.sunday1 }, { fields: ['sunday1'] }).then(() => {
        // title will now be 'foooo' but description is the very same as before
    })

    app.post("/api/nurse", function(req, res) {
        return db.Nurse.update({

            // badgeId: req.body.badgeId,
            sunday1: req.body.sunday1
                // sunday2: req.body.sunday2,
                // sunday3: req.body.sunday3,
                // monday1: req.body.monday1,
                // monday2: req.body.monday2,
                // monday3: req.body.monday3,
                // tuesday1: req.body.tuesday1,
                // tuesday2: req.body.tuesday2,
                // tuesday3: req.body.tuesday3,
                // wednesday1: req.body.wednesday1,
                // wednesday2: req.body.wednesday2,
                // wednesday3: req.body.wednesday3,
                // thursday1: req.body.thursday1,
                // thursday2: req.body.thursday2,
                // thursday3: req.body.thursday3,
                // friday1: req.body.friday1,
                // friday2: req.body.friday2,
                // friday3: req.body.friday3,
                // saturday1: req.body.saturday1,
                // saturday2: req.body.saturday2,
                // saturday3: req.body.saturday3
        }, { fields: ['sunday1'] }).then(function(dbNurses) {
            // console.log(dbPatient);
            var jsonDate = (new Date()).toJSON();
            // console.log(jsonDate);
            // console.log(req.body);
            console.log("moving through the promise")
            res.render("availability", {
                nurse_db: dbNurses,
                sunday1: dbNurses.sunday1
                    // sunday2: dbNurses.sunday2,
                    // sunday3: dbNurses.sunday3,
                    // monday1: dbNurses.monday1,
                    // monday2: dbNurses.monday2,
                    // monday3: dbNurses.monday3,
                    // tuesday1: dbNurses.tuesday1,
                    // tuesday2: dbNurses.tuesday2,
                    // tuesday3: dbNurses.tuesday3,
                    // wednesday1: dbNurses.wednesday1,
                    // wednesday2: dbNurses.wednesday2,
                    // wednesday3: dbNurses.wednesday3,
                    // thursday1: dbNurses.thursday1,
                    // thursday2: dbNurses.thursday2,
                    // thursday3: dbNurses.thursday3,
                    // friday1: dbNurses.friday1,
                    // friday2: dbNurses.friday2,
                    // friday3: dbNurses.friday3,
                    // saturday1: dbNurses.saturday1,
                    // saturday2: dbNurses.saturday2,
                    // saturday3: dbNurses.saturday3

            });
        });
    });
    // DELETE route for deleting Patients. You can access the Patient's id in req.params.id
    app.delete("/api/nurse", function(req, res) {

        db.Patient.destroy({
            where: {

            }
        });


    });
    // DELETE FROM post WHERE status = 'inactive';
    // PUT route for updating todos. The updated todo will be available in req.body
    app.put("/api/nurse", function(req, res) {

    });

};


// =================================== ADMIN ZONE ========================================