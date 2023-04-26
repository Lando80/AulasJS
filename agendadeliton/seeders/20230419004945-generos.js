'use strict';
const { generos } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await generos.create({
      nome: 'Forró'
    })

    await generos.create({
      nome: 'Brega'
    })

    await generos.create({
      nome: 'Funk'
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
