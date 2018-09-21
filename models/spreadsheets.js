"use strict";

// Use the Sequelize ORM to define table that stores ID, sheet ID, and name of the Spreadsheets we create.
module.exports = function(sequelize, DataTypes) {
    var Spreadsheet = sequelize.define('Spreadsheet', {
        id: {type: DataTypes.STRING, allowNull: false, primaryKey: true},
        sheetId: {type: DataTypes.INTEGER, allowNull: false},
        name: {type: DataTypes.STRING, allowNull: false}
    });
    return Spreadsheet;
};