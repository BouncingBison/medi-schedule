// nurse model

module.exports = function(sequelize, DataTypes) {
    var Nurse = sequelize.define("Nurse", {
        // badge ID
        badgeId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // days
        sunday1: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        sunday2: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        sunday3: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        monday1: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        monday2: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        monday3: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        tuesday1: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        tuesday2: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        tuesday3: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        wednesday1: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        wednesday2: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        wednesday3: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        thursday1: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        thursday2: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        thursday3: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        friday1: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        friday2: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        friday3: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        saturday1: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        saturday2: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        saturday3: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });
    return Nurse;
};