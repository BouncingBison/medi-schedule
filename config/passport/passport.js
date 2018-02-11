var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, Nurse) {

    var Nurse = nurse;
    var LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser(function(nurse, done) {
        done(null, nurse.id);
    });


    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        Nurse.findById(id).then(function(nurse) {
            if (nurse) {
                done(null, nurse.get());
            } else {
                done(nurse.errors, null);
            }
        });

    });

    passport.use('local-signup', new LocalStrategy(

        {
            // be open to changing this to usernameField
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },

        function(req, username, password, done) {


            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            Nurse.findOne({
                where: {
                    username: username
                }
            }).then(function(nurse) {

                if (nurse) {
                    return done(null, false, {
                        message: 'badge Id is taken, nurse already on staff'
                    });

                } else

                {

                    var nursePassword = generateHash(password);

                    var data =

                        {
                            username: username,

                            password: nursePassword

                        };


                    Nurse.create(data).then(function(newNurse, created) {

                        if (!newNurse) {

                            return done(null, false);

                        }

                        if (newNurse) {

                            return done(null, newNurse);

                        }

                    });

                }

            });
        }

    ));


    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(

        {

            // by default, local strategy uses username and password, we will override with email
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function(req, username, password, done) {

            var Nurse = nurse;

            var isValidPassword = function(nursepass, password) {
                return bCrypt.compareSync(password, nursepass);
            }

            Nurse.findOne({ where: { username: username } }).then(function(nurse) {

                if (!nurse) {
                    return done(null, false, { message: 'username does not exist' });
                }

                if (!isValidPassword(nurse.password, password)) {

                    return done(null, false, { message: 'Incorrect password.' });

                }

                var nurseinfo = nurse.get();

                return done(null, nurseinfo);

            }).catch(function(err) {

                console.log("Error:", err);

                return done(null, false, { message: 'Something went wrong with your Signin' });


            });

        }
    ));

}