'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('students', [
      {
        id: 1,
        name: 'John Doe',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: 'Jane Smith',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        name: 'Emily Johnson',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        name: 'Michael Brown',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        name: 'Sarah Davis',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('students', null, {});
  }
};
