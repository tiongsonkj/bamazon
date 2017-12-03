var mysql = require("mysql");
var inquirer = require("inquirer");

var connect = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: 'root',
	password: '',

	database: 'bamazon'
});

function runStore() {

	// table name is products
	var query = connect.query(
		"SELECT * FROM products",
		function (error, results) {

		var id = [];

		for (var i = 0; i < results.length; i++) {
			id.push("" + results[i].item_id);
		}

			inquirer.prompt([
				{
					name: "product",
					type: "rawlist",
					message: "What is the ID of the product you would like to purchase?",
					choices: id
					// validate?
				}, {
					name: "stock",
					message: "How many units of this product would you like to buy?"
				}
			]).then(function(answers) {
				console.log("You made a purchase!");
			}).catch(function (error) {
				console.log(error);
			})
		});
}

/*function prompt() {
	// have them select from array?
	inquirer.prompt([
		{
			name: "id",
			type: "rawlist",
			message: "What is the ID of the product you would like to purchase?",
			choices: results.item_id
			// validate?
		}, {
			name: "stock",
			message: "How many units of this product would you like to buy?"
		}
	]).then(function(answers) {
		console.log("You made a purchase!");

		if (user's answers > stock availability) {
			console.log("Insufficient quantity!");
			return false;
		} else {
			remove the product from the database...which means to UPDATE?
		}

		show total cost of purchase
	}) 
}
*/




runStore();