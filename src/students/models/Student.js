

module.exports = (sequelize,DataTypes) => {
    const Student = sequelize.define('Student', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }, {
        tableName: 'students',
        timestamps: true,
        underscored: true
    });
    return Student
}
