'use strict';

const tableName = 'employee_level';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DATE, STRING, INTEGER } = Sequelize;
    await queryInterface.createTable(
      tableName,
      {
        employee_level_id: { type: STRING, primaryKey: true },
        employee_level_base_salary: { type: INTEGER, allowNull: false },
        employee_level_description: { type: STRING, allowNull: false },
        createdAt: { type: DATE, defaultValue: Sequelize.literal('NOW()') },
        updatedAt: { type: DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      },
      {
        charset: 'utf8'
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  }
};
