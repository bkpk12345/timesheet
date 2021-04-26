//users
var mongoose = require("mongoose");

//define schema for user model
var userSchema = mongoose.Schema({
	local: {
		name: { type: String },
		id: { type: Number, unique: true },
		type: { type: String, enum: ["employee", "employer"] },
	},
});

// create the model for users and expose it to our app
module.exports = mongoose.model("User", userSchema);
