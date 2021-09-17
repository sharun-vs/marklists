const { ExpressRouter, Fs, Parse, Csvtojson } = require("../../../tools");
const Student = require("../models/student.model");

ExpressRouter.post("/upload", (req, res, next) => {
	const file = req.files.file;
	const csvData = file.data.toString("utf8");

	return Csvtojson()
		.fromString(csvData)
		.then((data) => {
			data.forEach((student) => {
				Student.create(student)
					.then((student) => {
						res.json("new student crated: " + student);
					})
					.catch((err) => {
						console.log(err.message);
					});
			});
		})
		.catch((err) => {
			console.log(err.message);
		});
});

ExpressRouter.get("/student/:id/results", (req, res, next) => {
	const studentId = req.params.id;

	Student.findAll({
		where: {
			authorId: studentId,
		},
	})
		.then((students) => {
			res.json({ "student result": students });
		})
		.catch((err) => {
			console.log(err.message);
		});

	next();
});

ExpressRouter.get("/students", (req, res, next) => {
	const resultStatus = req.query.resultStatus;
	let status;

	if (resultStatus === "passed") {
		status = true;
	} else if (resultStatus === "failed") {
		status = false;
	}

	Student.findAll({
		where: {
			passed: status,
		},
	})
		.then((students) => {
			res.json({ "All Students": students });
		})
		.catch((err) => {
			console.log(err.message);
		});

	next();
});

module.exports = ExpressRouter;
