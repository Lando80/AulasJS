'use strict';
const { emails } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await emails.create({
      email: 'adasd@asdasd.com',
      pessoa_id: 1
    })

    await emails.create({
      email: 'vcbcbv@uiuiuku.com',
      pessoa_id: 1
    })

    await emails.create({
      email: 'mjhnhnh@xcxzcxzcd.com',
      pessoa_id: 2
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
