const express = require("express");
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");

const expressServer = express();
expressServer.use(cors());
expressServer.use(express.json());

const ExpressRouter = express.Router();

module.exports = {
	ExpressServer: expressServer,
	Sequelize: Sequelize,
	DataTypes: DataTypes,
	ExpressRouter: ExpressRouter,
};
