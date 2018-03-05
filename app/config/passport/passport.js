//load bcrypt
var bCrypt = require('bcrypt-nodejs');
var db = require("../../models");



/* NOTE: this passport file makes use of a modified strategy.js file 
in node_modules/passport-local that adds the badgeId field to the list of request params 
which allows the authentication process to take intoo account both
 badgeId and email address as identiying inputs */


module.exports = function(passport, user) {

    var User = user;
    var LocalStrategy = require('passport-local').Strategy;


    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });


    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id).then(function(user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });

    });


    passport.use('local-signup', new LocalStrategy(

        {
            usernameField: 'email',
            passwordField: 'password',
            badgeIdField: 'badgeId',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function(req, email, password, badgeId, done) {


            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            User.findOne({ where: { email: email } }).then(function(user) {

                if (user) {
                    return done(null, false, { message: 'That email is already taken' });
                } else {
                    var userPassword = generateHash(password);
                    var data = {
                        email: email,
                        badgeId: req.body.badgeId,
                        password: userPassword,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname
                    };



                    User.create(data).then(function(newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }

                        if (newUser) {
                            return done(null, newUser);

                        }


                    });


                    db.nurse.findOne({ where: { badgeId: badgeId } }).then(function(nurse) {
                        if (nurse) {
                            return done(null, false, { message: 'Badge ID is already registered' });
                            console.log("this nurse is already registered");
                        } else {
                            var badgeData = {
                                badgeId: req.body.badgeId,
                            };
                        }
                        db.nurse.create(badgeData).then(function(data) {

                            console.log("nurse has been registered:", data.badgeId);



                        });
                    });
                }


            });



        }

    ));

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(

        {
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            badgeIdField: 'badgeId',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function(req, email, password, badgeId, done) {

            var User = user;

            var isValidPassword = function(userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }

            User.findOne({ where: { email: email } }).then(function(user) {

                if (!user) {
                    return done(null, false, { message: 'Email does not exist' });
                }

                if (!isValidPassword(user.password, password)) {

                    return done(null, false, { message: 'Incorrect password.' });

                }

                var userinfo = user.get();

                return done(null, userinfo);
                console.log(user);
                console.log(userinfo);

            }).catch(function(err) {

                console.log("Error:", err);

                return done(null, false, { message: 'Something went wrong with your Signin' });

            });

        }
    ));


    //  return user;

}























// ========================================================================================
// //load bcrypt
// var bCrypt = require('bcrypt-nodejs');
// var db = require("../../models");

// //  last changes made, passing done as an arg/param to get things working. 


// // new goal, get patient posting set up. write shift function and sessions. 


// // plan artisans 

// module.exports = function(passport, user, badgeId, done) {

//     var User = user;
//     var LocalStrategy = require('passport-local').Strategy;


//     passport.serializeUser(function(user, done) {
//         done(null, user.id);

//     });


//     // used to deserialize the user
//     passport.deserializeUser(function(id, done) {
//         User.findById(id).then(function(user) {
//             if (user) {
//                 done(null, user.get());
//                 // console.log("user id ", user.id);
//                 // console.log("user badgeID ", user.badgeId);
//                 // console.log("user is ", user);
//             } else {
//                 done(user.errors, null);
//             }
//         });
//     });


//     passport.use('local-signup', new LocalStrategy(

//         {
//             usernameField: 'email',
//             passwordField: 'password',
//             passReqToCallback: true // allows us to pass back the entire request to the callback
//         },

//         function(req, badgeId, email, password, done) {


//             var generateHash = function(password) {
//                 return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
//             };

//             db.nurse.findOne({ where: { badgeId: badgeId } }).then(function(nurse) {
//                 if (nurse) {
//                     return done(null, false, { message: 'Badge ID is already registered' });
//                 } else {
//                     var badgeData = {
//                         badgeId: req.body.badgeId,
//                     };
//                 }
//                 db.nurse.create(badgeData).then(function(data) {

//                     console.log("nurse has been registered:", data.badgeId);



//                 });
//             });

//             User.findOne({ where: { email: email } }).then(function(user, done) {
//                 if (user) {
//                     return null;
//                 } else {
//                     var userPassword = generateHash(password);
//                     var data = {
//                         email: email,
//                         badgeId: req.body.badgeId,
//                         password: userPassword,
//                         firstname: req.body.firstname,
//                         lastname: req.body.lastname
//                     };


//                     User.create(data).then(function(newUser, created, done) {
//                         if (!newUser) {
//                             return done(null, false);
//                         }

//                         if (newUser) {
//                             return done(null, newUser);

//                         }


//                     });
//                 }


//             });



//         }



//     ));

//     //LOCAL SIGNIN
//     passport.use('local-signin', new LocalStrategy(

//         {
//             // by default, local strategy uses username and password, we will override with email
//             usernameField: 'email',
//             passwordField: 'password',
//             passReqToCallback: true // allows us to pass back the entire request to the callback
//         },

//         function(req, email, password, done) {

//             var User = user;

//             var isValidPassword = function(userpass, password) {
//                 return bCrypt.compareSync(password, userpass);
//             }

//             User.findOne({ where: { email: email } }).then(function(user) {

//                 if (!user) {
//                     return done(null, false, { message: 'Email does not exist' });
//                 }

//                 if (!isValidPassword(user.password, password)) {

//                     return done(null, false, { message: 'Incorrect password.' });

//                 }

//                 var userinfo = user.get();

//                 return done(null, userinfo);

//             }).catch(function(err) {

//                 console.log("Error:", err);

//                 return done(null, false, { message: 'Something went wrong with your Signin' });


//             });

//         }
//     ));


//     //  return user;

// }