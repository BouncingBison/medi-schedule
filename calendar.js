var moment = require('moment');


var Week = {

    sunday: moment().day("Sunday").format("dddd, MMMM, DD"),
    monday: moment().day("Monday").format("dddd, MMMM, DD"),
    tuesday: moment().day("Tuesday").format("dddd, MMMM, DD"),
    wednesday: moment().day("Wednesday").format("dddd, MMMM, DD"),
    thursday: moment().day("Thursday").format("dddd, MMMM, DD"),
    friday: moment().day("Friday").format("dddd, MMMM, DD"),
    saturday: moment().day("Saturday").format("dddd, MMMM, DD")

}




module.exports = Week;