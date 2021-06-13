'use strict';

const tableName = 'employee';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DATE, STRING, INTEGER } = Sequelize;
    await queryInterface.createTable(
      tableName,
      {
        employee_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        employee_name: { type: STRING, allowNull: false },
        employee_level_id: {
          type: STRING,
          allowNull: false,
          references: {
            model: 'employee_level',
            key: 'employee_level_id'
          }
        },
        company_id: {
          type: INTEGER,
          allowNull: false,
          references: {
            model: 'company',
            key: 'company_id'
          }
        },
        createAt: { type: DATE, defaultValue: Sequelize.literal('NOW()') },
        updateAt: { type: DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') }
      },
      {
        charset: 'utf8'
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  }
};
