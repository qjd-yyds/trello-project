'use strict';
// ./node_modules/.bin/sequelize seed:create --name UserInit 种子脚本,操作数据
const crypto = require('crypto');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let md5 = crypto.createHash('md5');
    let password = md5.update('123456').digest('hex');
    let date = new Date();
    // 创建user表数据
    return queryInterface.bulkInsert(
      'User',
      ['zMouse', 'mt', 'leo', 'reci'].map((name, index) => {
        return {
          id: index + 1,
          name,
          password,
          createAt: date,
          updateAt: date
        };
      })
    );
  },

  down: async (queryInterface, Sequelize) => {
    // 删除表
    return queryInterface.bulkDelete('User', null, {});
  }
};
