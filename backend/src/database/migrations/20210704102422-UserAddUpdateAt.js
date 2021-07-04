'use strict';
// ./node_modules/.bin/sequelize migration:create --name UserAddUpdateAt 迁徙脚本,操作表结构
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 给user表添加列字段 updataAt
    return queryInterface.addColumn('User', 'updateAt', {
      type: Sequelize.DATE,
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    // 删除update列字段
    return queryInterface.removeColumn('User', 'updateAt');
  }
};
