// *****************************************************************************
// ******************************************************************************
// *** Dependencies
// =============================================================

// Sets up the Express App
// =============================================================
var express = require("express");
var app = express();


//  models
var models = require("./models/user.js");
var patients = require('./models/patients.js');
var db = require("./models");
// end of models
var passport = require('passport')
var session = require('express-session')
var bodyParser = require("body-parser");
var env = require('dotenv').load();
var exphbs = require('express-handlebars');
var path = require('path');
var nodemon = require('nodemon');
var cookieParser = require('cookie-parser');
var moment = require('moment');
var cookieParser = require('cookie-parser');

// routes
var authRoute = require('./routes/auth.js')(app, passport);
require("./routes/api-routes.js")(app);
// end of routes
var PORT = process.env.PORT || 6072;

// our express router 
// var router = express.Router();


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname, '/views/')));
app.use(express.static(path.join(__dirname, '/views/layouts/css')));

// passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

// end passport 

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
// end of handlebars





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
        res.render("availability", {
            nurse_db: dbNurses,
            sunday1: dbNurses.sunday1,
            sunday2: dbNurses.sunday2,
            sunday3: dbNurses.sunday3,
            monday1: dbNurses.monday1,
            monday2: dbNurses.monday2,
            monday3: dbNurses.monday3,
            tuesday1: dbNurses.tuesday1,
            tuesday2: dbNurses.tuesday2,
            tuesday3: dbNurses.tuesday3,
            wednesday1: dbNurses.wednesday1,
            wednesday2: dbNurses.wednesday2,
            wednesday3: dbNurses.wednesday3,
            thursday1: dbNurses.thursday1,
            thursday2: dbNurses.thursday2,
            thursday3: dbNurses.thursday3,
            friday1: dbNurses.friday1,
            friday2: dbNurses.friday2,
            friday3: dbNurses.friday3,
            saturday1: dbNurses.saturday1,
            saturday2: dbNurses.saturday2,
            saturday3: dbNurses.saturday3
        });
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

// // availability page 
// app.get('/availability', function(req, res) {
//     res.render('availability');
//     console.log("set your schedule");
// });



// Syncing our sequelize models and then starting our Express app
// // =============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});