const { ExpressServer } = require("./tools");
const db = require("./util/database.config");
const studentRoutes = require("./modules/students/routes/student.routes");

db.authenticate()
	.then(() => {
		console.log("Successfully Connected To Database");
	})
	.catch((err) => {
		console.log(err);
	});

ExpressServer.get("/", (req, res, next) => {
	res.json({ message: "Welcome to marklist Api" });
});

ExpressServer.use("/marklistapi", studentRoutes);

ExpressServer.listen(process.env.PORT, () => {
	console.log(`Server is running on : http://localhost:${process.env.PORT}.`);
});
