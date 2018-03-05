// //  UPDATE TEST FUNCTION ================================================
// db.nurse.addHook('afterUpdate', function(instance) {
//     console.log(instance.toJSON());
// });

// exports.schedule = function(req, res) {
//     // this needs further validation in order to correlate badge ID for the session with badge ID of the update 
//     db.nurse.update({
//         sunday1: req.body.sunday1
//     }, {
//         // raw: true,
//         // omitting returning: true produces a result in the next step of the promise chain showing only the # of affected row 
//         // returning: true,
//         where: {
//             badgeId: req.body.badgeId
//         }
//         // chain on a new find query that finds data based on where this was making changes and then hand that data to the front end
//     }).then(function(results) {
//         console.log(results);
//         // within this function the front end gets organized so that handlebars can render the page. 
//     });
// }

// //  UPDATE TEST FUNCTION ================================================



// Model.beforeBulkCreate((records, { fields }) => {
//     // records = the first argument sent to .bulkCreate
//     // fields = one of the second argument fields sent to .bulkCreate
// })

// Model.bulkCreate([
//         { username: 'Toni' }, // part of records argument
//         { username: 'Tobi' } // part of records argument
//     ], { fields: ['username'] } // options parameter
// )

// db.nurses.afterBulkUpdate(({ attributes, where }) => {
//     // where - in one of the fields of the clone of second argument sent to .update
//     // attributes - is one of the fields that the clone of second argument of .update would be extended with
//     console.log(attributes);
//     console.log(where);


// })

// Model.update({ gender: 'Male' } /*attributes argument*/ , { where: { username: 'Tom' } } /*where argument*/ )

// Model.beforeBulkDestroy(({ where, individualHooks }) => {
//     // individualHooks - default of overridden value of extended clone of second argument sent to Model.destroy
//     // where - in one of the fields of the clone of second argument sent to Model.destroy
// })

// Model.destroy({ where: { username: 'Tom' } } /*where argument*/ )



// Callback Function Format 

downloadPhoto('http://coolcats.com/cat.gif', handlePhoto)

function handlePhoto(error, photo) {
    if (error) console.error('Download error!', error)
    else console.log('Download finished', photo)
}

console.log('Download started')