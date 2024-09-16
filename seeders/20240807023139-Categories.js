"use strict";
module.exports = {
    async up(queryInterface) {
        const data = require("../data/categories.json");
        await queryInterface.bulkInsert("Categories", data);
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("Categories", null, {});
    },
};
