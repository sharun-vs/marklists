const express = require("express");
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");
const fileupload = require("express-fileupload");
const csvtojson = require("csvtojson");

const expressServer = express();
expressServer.use(cors());
expressServer.use(express.json());

const ExpressRouter = express.Router();

module.exports = {
	ExpressServer: expressServer,
	Sequelize: Sequelize,
	DataTypes: DataTypes,
	ExpressRouter: ExpressRouter,
	Fs: fs,
	FileUpload: fileupload,
	Csvtojson: csvtojson,
};
