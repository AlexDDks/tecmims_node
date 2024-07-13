const { sequelize } = require('./connection');

const initializeDatabase = async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      await sequelize.sync(); // Utiliza { force: true } para recrear las tablas
      console.log('Database & tables created!');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };

  module.exports = {initializeDatabase};

// Usage: