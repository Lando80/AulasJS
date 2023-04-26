'use strict';
const { pessoas_generos } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await pessoas_generos.create({
      pessoa_id: 1,
      genero_id: 1
    })

    await pessoas_generos.create({
      pessoa_id: 1,
      genero_id: 3
    })

    await pessoas_generos.create({
      pessoa_id: 2,
      genero_id: 2
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
