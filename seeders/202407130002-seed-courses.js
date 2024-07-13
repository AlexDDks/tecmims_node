'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('courses', [
      {
        title: 'Introduction to Node.js',
        instructor_id: 1,
        description: 'Learn the basics of Node.js, including installation, core modules, and building simple applications.',
        language: 'English',
        difficulty: 'Beginner',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Advanced JavaScript',
        instructor_id: 2,
        description: 'Deep dive into JavaScript concepts and techniques for experienced developers.',
        language: 'English',
        difficulty: 'Advanced',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Database Design',
        instructor_id: 3,
        description: 'Learn how to design efficient databases using SQL and NoSQL technologies.',
        language: 'English',
        difficulty: 'Intermediate',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Full Stack Development',
        instructor_id: 1,
        description: 'Master full stack development using Node.js, Express, and MongoDB.',
        language: 'Spanish',
        difficulty: 'Intermediate',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Machine Learning Basics',
        instructor_id: 2,
        description: 'Introduction to machine learning concepts and practical applications.',
        language: 'English',
        difficulty: 'Beginner',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('courses', null, {});
  }
};
