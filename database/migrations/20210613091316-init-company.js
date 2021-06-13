'use strict';

const tableName = 'company';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DATE, INTEGER, STRING } = Sequelize;
    await queryInterface.createTable(
      tableName,
      {
        company_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        company_name: { type: STRING, allowNull: false },
        createAt: { type: DATE, defaultValue: Sequelize.literal('NOW()') },
        updateAt: { type: DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') }
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
