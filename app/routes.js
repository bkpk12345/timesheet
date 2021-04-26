//load
var Task = require("../app/models/task");
var User = require("./models/user");
var mongoose = require("mongoose");
var TaskModel = mongoose.model("Task");
var UserModel = mongoose.model("User");
var _ = require("lodash");
module.exports = function (app, passport) {
	app.get("/tasks", function (req, res) {
		console.log(req.query.date);

		let date = new Date(req.query.date);
		date = date.toDateString();
		//find all tasks that pertain to selected calendar date
		TaskModel.find({}, function (err, result) {
			if (err) throw err;
			//Save the result into the response object and into mongodb
			res.json({ result });
		});
	});

	//create tasks
	app.post("/tasks", async function (req, res) {
		//create model with required data
		var newTask = new Task();
		newTask.local.id = req.body.id;
		newTask.local.project = req.body.project;
		newTask.local.task = req.body.task;
		newTask.local.hours = req.body.hours;
		newTask.local.date = req.body.date;

		return res.send(await newTask.save());
	});

	app.post("/users", async function (req, res) {
		var id = 1;
		var name = req.body.name;
		var type = req.body.type;
		var ids = await User.distinct("id");
		console.log({ ids });

		var maxId = _.isEmpty(ids) ? id : _.max(ids);
		console.log({ maxId, id });
		var newUser = {
			name: name,
			id: maxId + 1,
			type: type,
		};

		console.log("newUser");
		console.log(newUser);

		var saved = await new User(newUser).save();

		return res.send(saved);
	});
};
