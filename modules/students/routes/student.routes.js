const { ExpressRouter } = require("../../../tools");
const Student = require("../models/student.model");

ExpressRouter.get("/students", (req, res) =>
	Student.findAll()
		.then((students) => {
			res.send(students);
		})
		.catch((err) => {
			console.log(err);
		})
);

module.exports = ExpressRouter;
