'use strict';

const tableName = 'employee';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      tableName,
      [
        {
          employee_id: 1,
          employee_name: 'Vic',
          employee_level_id: '10',
          company_id: 2,
        },
        {
          employee_id: 2,
          employee_name: 'Bill',
          employee_level_id: '9',
          company_id: 1,
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  }
};
