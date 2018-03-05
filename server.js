    var express = require('express')
    var app = express()
    var passport = require('passport')
    var session = require('express-session')
    var bodyParser = require('body-parser')
    var env = require('dotenv').load()
    var exphbs = require('express-handlebars')
    var path = require('path');
    var moment = require('moment');
    var methodOverride = require('method-override');
    var helmet = require('helmet');




    // helmet security headers 
    app.use(helmet());
    // sets headers to deny iFrames 
    // app.use(frameguard({ action: 'deny' }));


    //For BodyParser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    // this is 
    // app.use(methodOverride(function(req, res) {
    //     if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    //         // look in urlencoded POST bodies and delete it
    //         var method = req.body._method;
    //         delete req.body._method;
    //         return method;
    //     }
    // }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: "application/vnd.api+json" }));
    app.use(express.static(path.join(__dirname, '/views/')));
    app.use(express.static(path.join(__dirname, '/views/layouts/css')));


    // For Passport
    app.use(
        session({
            secret: 'keyboard cat',
            key: 'super-secret-cookie',
            resave: true,
            //  need to resolve whether or not this needs to save uninitialized 
            // saveUninitialized: true,
            saveUninitialized: false,
            cookie: { maxAge: 60000 }
        })); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions


    // app.use(cookieSession({

    //     name: 'session',
    //     keys: 'robot',

    //     //cookie is valid for 24 hours 
    //     maxAge: 24 * 60 * 60 * 1000
    // }))

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





    //Models
    var db = require("./app/models");

    //Routes
    var authRoute = require('./app/routes/auth.js')(app, passport);
    var apiRoutes = require('./app/routes/api.js')(app, passport);
    var patientRoutes = require('./app/routes/patientRoutes.js')(app, passport);

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