 //load bcrypt
 var bCrypt = require('bcrypt-nodejs');

 module.exports = function(passport, user) {


     var User = user;
     var LocalStrategy = require('passport-local').Strategy;


     passport.serializeUser(function(user, done) {
         done(null, user.badgeId);
     });


     // used to deserialize the user
     passport.deserializeUser(function(badgeId, done) {
         User.findById(badgeId).then(function(user) {
             if (user) {
                 done(null, user.get());
             } else {
                 done(user.errors, null);
             }
         });

     });


     passport.use('local-signup', new LocalStrategy(

         {
             usernameField: 'badgeId',
             passwordField: 'password',
             passReqToCallback: true // allows us to pass back the entire request to the callback
         },

         function(req, badgeId, password, done) {

             var generateHash = function(password) {
                 return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
             };

             User.findOne({ where: { badgeId: badgeId } }).then(function(user) {
                 console.log("inside the passport logic file, line 47");

                 if (user) {
                     return done(null, false, { message: 'That badgeID already exists' });
                     console.log("badge number is already in use!");
                 } else {
                     var userPassword = generateHash(password);
                     var data = {
                         badgeId: badgeId,
                         password: userPassword,
                         //  firstname: req.body.firstname,
                         //  lastname: req.body.lastname
                     };

                     User.create(data).then(function(newUser, created) {
                         if (!newUser) {
                             return done(null, false);
                             console.log("already user");
                         }

                         if (newUser) {
                             return done(null, newUser);
                             console.log("created a new user");


                         }


                     });
                 }


             });



         }



     ));

     //LOCAL SIGNIN
     passport.use('local-signin', new LocalStrategy(

         {
             // by default, local strategy uses username and password
             usernameField: 'badgeId',
             passwordField: 'password',
             passReqToCallback: true // allows us to pass back the entire request to the callback
         },

         function(req, badgeId, password, done) {

             var User = user;
             console.log("inside the passport logic file line 101");
             // could these two args be confused for one another? 
             var isValidPassword = function(userpass, password) {
                 return bCrypt.compareSync(password, userpass);
             }

             User.findOne({ where: { badgeId: badgeId } }).then(function(user) {

                 console.log("inside the passport logic file line 109");

                 if (!user) {
                     return done(null, false, { message: 'This Badge ID was not found' });
                 }

                 if (!isValidPassword(user.password, password)) {

                     return done(null, false, { message: 'Incorrect password.' });

                 }

                 var userinfo = user.get();

                 return done(null, userinfo);

             }).catch(function(err) {

                 console.log("Error:", err);

                 return done(null, false, { message: 'Something went wrong when siging you in' });


             });

         }
     ));

 }