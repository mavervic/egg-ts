'use strict';

const tableName = 'company';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      tableName,
      [
        {
          company_id: 1,
          company_name: '鴻海',
        },
        {
          company_id: 2,
          company_name: '台積電',
        },
        {
          company_id: 3,
          company_name: '長榮',
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  }
};
