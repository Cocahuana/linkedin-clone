const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("user", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            validate: {
                isUUID: 4,
            },
        },   
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notEmpty: true,
            },
        },  
        password: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        }, 
        names: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        surnames: {
            type: DataTypes.STRING,
            allowNull: true
        },
        alias: {
            type: DataTypes.STRING,
            allowNull: true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true
        },
        isVerified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        datacompleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        blacklist: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }  
    }, {timestamps: false})
};


//names
//surnames
//alias
//country
//isAdmin
//blacklist
//datacompleted
//isVerified