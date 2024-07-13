'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('instructors', [
      {
        id: 1,
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        image_path: 'images/alice.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: 'Bob Smith',
        email: 'bob.smith@example.com',
        image_path: 'images/bob.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        name: 'Charlie Brown',
        email: 'charlie.brown@example.com',
        image_path: 'images/charlie.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        name: 'David Lee',
        email: 'david.lee@example.com',
        image_path: 'images/david.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        name: 'Emma Davis',
        email: 'emma.davis@example.com',
        image_path: 'images/emma.jpg',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('instructors', null, {});
  }
};
