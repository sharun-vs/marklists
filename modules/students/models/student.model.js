const { DataTypes } = require("../../../tools");
const db = require("../../../util/database.config");

const Student = db.define(
	"Student",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
		},
		mark1: {
			type: DataTypes.FLOAT,
		},
		mark2: {
			type: DataTypes.FLOAT,
		},
		mark3: {
			type: DataTypes.FLOAT,
		},
	},
	{ timestamps: true }
);

module.exports = Student;
