// db.nurse.update({
//     sunday1: req.body.sunday1,
//     sunday2: req.body.sunday2,
//     sunday3: req.body.sunday3
//         // monday1: req.body.monday1,
//         // monday2: req.body.monday2,
//         // monday3: req.body.monday3,
//         // tuesday1: req.body.tuesday1,
//         // tuesday2: req.body.tuesday2,
//         // tuesday3: req.body.tuesday3,
//         // wednesday1: req.body.wednesday1,
//         // wednesday2: req.body.wednesday2,
//         // wednesday3: req.body.wednesday3,
//         // thursday1: req.body.thursday1,
//         // thursday2: req.body.thursday2,
//         // thursday3: req.body.thursday3,
//         // friday1: req.body.friday1,
//         // friday2: req.body.friday2,
//         // friday3: req.body.friday3,
//         // saturday1: req.body.saturday1,
//         // saturday2: req.body.saturday2,
//         // saturday3: req.body.saturday3
// }, { where: { badgeId: req.body.badgeId } }).then(() => {



// })




// { where: { badgeId: req.body.badgeId } }).then(() => {

// })
/*  THIS IS THE ORIGINAL UPDATE FUNCTION 
// this is a working update function, returns an array back and does not render with handlebars 
exports.schedule = function(req, res) {
    // req.params.badgeId = req.body.badgeId;



    // this needs further validation in order to correlate badge ID for the session with badge ID of the update 
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
        // raw: true,
        // omitting returning: true produces a result in the next step of the promise chain showing only the # of affected row 
        // returning: true,
        where: {
            badgeId: req.body.badgeId
        }.db.nurse.hook('afterUpdate', function(results) {


            db.nurse.findOne({
                where: { badgeId: req.body.badgeId }
                // attributes: ['id', ['name', 'title']]
            }).then(function(results) {

                console.log("inside the findOne", results);

            });





        })




        // chain on a new find query that finds data based on where this was making changes and then hand that data to the front end

    }).then(function(results) {
        console.log(results);
        // within this function the front end gets organized so that handlebars can render the page. 

        // console.log(updatedNurse);
        // res.json(updatedNurse);

        // [undefined, 1]

        // if (results.id != null) {
        //     var results = results.toJSON();
        //     results.user_vote = count;
        //     return res.json(results);
        // } else {
        //     res.sendStatus(404);
        // }
        // console.log(res.body);
        // console.log(results.dataValues);
        // console.log(results.Sequelize);
        // console.log(results.sequelize);
        // var resultMap = results.map(function(results) {
        //     return results.length;
        // });
        // console.log("results.length", results.length);
        // console.log([results[0]]);
        // console.log(results[0][0]);
        // res.json([dbnurse[i]]);
        // res.render("dashboard");
        // res.render("dashboard", {
        //     results: results,
        //     results: results.sunday1
        //         dbnurse: dbnurse,
        //         sunday1: dbnurse.sunday1,
        //         sunday2: dbnurse.sunday2,
        //         sunday3: dbnurse.sunday3,
        //         monday1: dbnurse.monday1,
        //         monday2: dbnurse.monday2,
        //         monday3: dbnurse.monday3,
        //         tuesday1: dbnurse.tuesday1,
        //         tuesday2: dbnurse.tuesday2,
        //         tuesday3: dbnurse.tuesday3,
        //         wednesday1: dbnurse.wednesday1,
        //         wednesday2: dbnurse.wednesday2,
        //         wednesday3: dbnurse.wednesday3,
        //         thursday1: dbnurse.thursday1,
        //         thursday2: dbnurse.thursday2,
        //         thursday3: dbnurse.thursday3,
        //         friday1: dbnurse.friday1,
        //         friday2: dbnurse.friday2,
        //         friday3: dbnurse.friday3,
        //         saturday1: dbnurse.saturday1,
        //         saturday2: dbnurse.saturday2,
        //         saturday3: dbnurse.saturday3
        // });
    });
}
*/