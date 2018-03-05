module.exports = function(sequelize, Sequelize) {
    var Patient = sequelize.define("patient", {
        // first name 
        first: {
            type: Sequelize.STRING,
            allowNull: true
        },
        // last name
        last: {
            type: Sequelize.STRING,
            allowNull: true
        },
        condition: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        // gender
        gender: {
            type: Sequelize.ENUM,
            values: ['Male', 'Female', 'Non-Binary'],
            allowNull: true
        },
        //  date of admission 
        admitted: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: true
        },
        // patientId # 
        patientId: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
        // this will be patientID in the future
    });
    return Patient;
};