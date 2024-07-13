

module.exports = (sequelize, DataTypes)=>{
    const Course = sequelize.define('Course', {
       id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
       title: {
           type: DataTypes.STRING(255),
           allowNull: false,
           unique: true,
       },
       instructor_id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           references: {
               model: 'instructors',
               key: 'id'
           },
           onDelete: 'CASCADE'
       },
       description: {
           type: DataTypes.STRING(255),
           allowNull: true
       },
       language: {
           type: DataTypes.STRING(255),
           allowNull: false
       },
       difficulty: {
           type: DataTypes.ENUM('Beginner', 'Intermediate', 'Advanced'),
           allowNull: false
       }
   }, {
       tableName: 'courses',
       timestamps: true,
       underscored: true
   })
 return Course
}
