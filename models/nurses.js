// nurse model

module.exports = function(sequelize, DataTypes) {
    var Nurse = sequelize.define("Nurse", {
        // PASSPORT PROPERTIES
        username: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        last_login: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        },
        // END PASSPORT
        // SHIFT PROPERTIES
        sunday1: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sunday2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sunday3: {
            type: DataTypes.STRING,
            allowNull: true
        },

        monday1: {
            type: DataTypes.STRING,
            allowNull: true
        },
        monday2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        monday3: {
            type: DataTypes.STRING,
            allowNull: true
        },

        tuesday1: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tuesday2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tuesday3: {
            type: DataTypes.STRING,
            allowNull: true
        },

        wednesday1: {
            type: DataTypes.STRING,
            allowNull: true
        },
        wednesday2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        wednesday3: {
            type: DataTypes.STRING,
            allowNull: true
        },

        thursday1: {
            type: DataTypes.STRING,
            allowNull: true
        },
        thursday2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        thursday3: {
            type: DataTypes.STRING,
            allowNull: true
        },

        friday1: {
            type: DataTypes.STRING,
            allowNull: true
        },
        friday2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        friday3: {
            type: DataTypes.STRING,
            allowNull: true
        },

        saturday1: {
            type: DataTypes.STRING,
            allowNull: true
        },
        saturday2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        saturday3: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Nurse;
};