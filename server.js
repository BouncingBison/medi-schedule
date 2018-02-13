    var express = require('express')
    var app = express()
    var passport = require('passport')
    var session = require('express-session')
    var bodyParser = require('body-parser')
    var env = require('dotenv').load()
    var exphbs = require('express-handlebars')
    var path = require('path');
    var moment = require('moment');


    //For BodyParser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: "application/vnd.api+json" }));
    app.use(express.static(path.join(__dirname, '/views/')));
    app.use(express.static(path.join(__dirname, '/views/layouts/css')));


    // For Passport
    app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions


    //For Handlebars
    // app.set('views', './app/views')
    app.engine('handlebars', exphbs({
        defaultLayout: 'main',
        // partialsDir: path.join(__dirname, '/views/'),
        // layoutsDir: path.join(__dirname, 'views/layouts'),
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





    // app.get('/', function(req, res) {
    //     res.send('Welcome to Passport with Sequelize');
    // });




    //Models
    var db = require("./app/models");

    //Routes
    var authRoute = require('./app/routes/auth.js')(app, passport);
    var apiRoutes = require('./app/routes/api.js')(app, passport);
    var patientRoutes = require('./app/routes/patient')(app, passport);

    //load passport strategies
    require('./app/config/passport/passport.js')(passport, db.user);


    //Sync Database
    db.sequelize.sync().then(function() {
        console.log('Database synced without issue')
    }).catch(function(err) {
        console.log(err, "Error: Database sync")
    });

    app.use(function(req, res, next) {
        res.status(404).send("Can not find page")
    });


    app.listen(5000, function(err) {
        if (!err)
            console.log("Navigate to localhost:5000");
        else console.log(err)

    });