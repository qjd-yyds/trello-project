'use strict';
// ./node_modules/.bin/sequelize migration:create --name UserInit 迁徙脚本操作表结构
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * 返回一个promise
     * 参数一,表名称
     * 参数二包含表中字段信息
     *
     */
    return queryInterface.createTable('User', {
      id: {
        // 字段类型:数字
        type: Sequelize.INTEGER,
        // 设置主键
        primaryKey: true,
        // 自增
        autoIncrement: true
      },
      name: {
        // 字段类型:字符串
        type: Sequelize.STRING(20),
        // 值唯一
        unique: true,
        // 不允许null
        allowNull: true
      },
      password: {
        // 字段类型:字符串
        type: Sequelize.STRING(32),
        // 不允许null
        allowNull: true
      },
      createAt: {
        // 日期类型
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('User');
  }
};
