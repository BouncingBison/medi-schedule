module.exports = function(sequelize, Sequelize) {

    var Nurse = sequelize.define('nurse', {
        id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
        // SHIFT PROPERTIES
        badgeId: {
            type: Sequelize.STRING,
            allowNull: true
        },
        sunday1: {
            type: Sequelize.STRING,
            allowNull: true
        },
        sunday2: {
            type: Sequelize.STRING,
            allowNull: true
        },
        sunday3: {
            type: Sequelize.STRING,
            allowNull: true
        },

        monday1: {
            type: Sequelize.STRING,
            allowNull: true
        },
        monday2: {
            type: Sequelize.STRING,
            allowNull: true
        },
        monday3: {
            type: Sequelize.STRING,
            allowNull: true
        },

        tuesday1: {
            type: Sequelize.STRING,
            allowNull: true
        },
        tuesday2: {
            type: Sequelize.STRING,
            allowNull: true
        },
        tuesday3: {
            type: Sequelize.STRING,
            allowNull: true
        },

        wednesday1: {
            type: Sequelize.STRING,
            allowNull: true
        },
        wednesday2: {
            type: Sequelize.STRING,
            allowNull: true
        },
        wednesday3: {
            type: Sequelize.STRING,
            allowNull: true
        },

        thursday1: {
            type: Sequelize.STRING,
            allowNull: true
        },
        thursday2: {
            type: Sequelize.STRING,
            allowNull: true
        },
        thursday3: {
            type: Sequelize.STRING,
            allowNull: true
        },

        friday1: {
            type: Sequelize.STRING,
            allowNull: true
        },
        friday2: {
            type: Sequelize.STRING,
            allowNull: true
        },
        friday3: {
            type: Sequelize.STRING,
            allowNull: true
        },

        saturday1: {
            type: Sequelize.STRING,
            allowNull: true
        },
        saturday2: {
            type: Sequelize.STRING,
            allowNull: true
        },
        saturday3: {
            type: Sequelize.STRING,
            allowNull: true
        }

        // {paranoid: true } 
    });


    return Nurse;
}