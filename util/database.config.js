const { Sequelize } = require("../tools");

const db = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
	host: process.env.HOST,
	dialect: process.env.DIALECT,
	define: { freezeTableName: true },
});

module.exports = db;
