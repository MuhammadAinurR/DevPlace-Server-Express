"use strict";
const { hashPassword } = require("../utils/bcrypt");
module.exports = {
    async up(queryInterface) {
        const data = require("../data/users.json");
        await queryInterface.bulkInsert("Users", data);
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("Users", null, {});
    },
};
