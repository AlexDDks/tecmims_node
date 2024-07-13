const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../database/connection');

module.exports = () => {
    const Instructor = sequelize.define('Instructor', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        image_path: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
    }, {
        tableName: 'instructors',
        timestamps: true,
        underscored: true
    });
    return Instructor;

}

