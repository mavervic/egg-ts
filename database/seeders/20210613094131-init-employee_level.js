'use strict';

const tableName = 'employee_level';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      tableName,
      [
        {
          employee_level_id: '10',
          employee_level_base_salary: 100000,
          employee_level_description: '總經理級'
        },
        {
          employee_level_id: '9',
          employee_level_base_salary: 80000,
          employee_level_description: '副總級'
        },
        {
          employee_level_id: '8',
          employee_level_base_salary: 70000,
          employee_level_description: '經理級'
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  }
};
