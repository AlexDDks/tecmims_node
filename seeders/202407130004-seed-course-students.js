'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('courses_students', [
      {
        course_id: 1,
        student_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: 2,
        student_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: 3,
        student_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: 1,
        student_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: 2,
        student_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('courses_students', null, {});
  }
};
