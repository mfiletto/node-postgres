'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    /* adds role column to user table */
    await queryInterface.addColumn(USER_TABLE, 'role', UserSchema.role);
  },

  async down (queryInterface, Sequelize) {
    /* removes role column from user table */
    await queryInterface.removeColumn(USER_TABLE, 'role');
  }
};
