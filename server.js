// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var patients = require('./models/patients.js');
var nodemon = require('nodemon');
var cookieParser = require('cookie-parser');
var moment = require('moment');

// our express router 
var router = express.Router();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 6072;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname, '/views/')));
app.use(express.static(path.join(__dirname, '/views/layouts/css')));



// Routes
// =============================================================
require("./routes/api-routes.js")(app);
// console.log(db.Patient);

// creating a view engine with Handlebars
var exphbs = require('express-handlebars');

// var handlebars = require('handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    helpers: {
        sunday: function() {
            return moment().day("Sunday").format("dddd, MMMM, DD")

        },
        monday: function() {
            return moment().day("Monday").format("dddd, MMMM, DD")

        },
        tuesday: function() {
            return moment().day("Tuesday").format("dddd, MMMM, DD")

        },
        wednesday: function() {
            return moment().day("Wednesday").format("dddd, MMMM, DD")

        },
        thursday: function() {
            return moment().day("Thursday").format("dddd, MMMM, DD")

        },
        friday: function() {
            return moment().day("Friday").format("dddd, MMMM, DD")

        },
        saturday: function() {
            return moment().day("Saturday").format("dddd, MMMM, DD")

        }
    }

}));







app.set('view engine', 'handlebars');


app.get('/patients', function(req, res) {
    db.Patient.findAll({
        // need to do something in here to feed jquery? 
        // or handlebars? 
    }).then(function(dbPatients) {

        res.render("patients", { patient_db: dbPatients });
        next();
    });
});

app.get('/availability', function(req, res) {

    db.Nurse.findAll({
        // need to do something in here to feed jquery? 
        // or handlebars? 
    }).then(function(dbNurses) {
        // console.log(dbPatients);
        // console.log(dbNurses);
        res.render("availability", { nurse_db: dbNurses });
        // next();
    });
});

// nurse page 
app.get('/nurses', function(req, res) {
    res.render('nurses');
    console.log("nurse please!");
});

// schedule page 
app.get('/schedule', function(req, res) {
    res.render('schedule');
    console.log("schedule please!");
});

// availability page 
app.get('/availability', function(req, res) {
    res.render('availability');
    console.log("set your schedule");
});



// PASSPORT.JS CODE 🔑🔑 
/*=====================================================================================*/
var passport = require('passport')
var session = require('express-session')
var env = require('dotenv').load();
var authRoute = require('./routes/auth.js')(app, passport);
var models = require("./models/user.js");

app.use(session({ secret: 'medi', resave: true, saveUninitialized: true })); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

//load passport strategies
var passConfig = require('./config/passport.js')(passport, models.user);

/*=====================================================================================*/
// END OF PASSPORT.JS CODE 🔑🔑 


// Syncing our sequelize models and then starting our Express app
// // =============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});