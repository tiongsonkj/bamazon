// node packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// set up connection to mysql
var connect = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: 'root',
	password: '',

	database: 'bamazon'
});

// create function runStore which will run our bamazon
function runStore() {

	// set up query that will connect to "products" table
	var query = connect.query(
		"SELECT * FROM products",
		function (error, results) {
			console.log("\nHere are the items that are available for purchase.\n");

		// create empty arrays so that I can use them later
		var id = [];
		var quantity = [];
		var prices = [];

		// create a for loop to push the data in the array
		// for loop will also display each item's ID, Name, and Price
		for (var i = 0; i < results.length; i++) {
			id.push("" + results[i].item_id);
			quantity.push("" + results[i].stock_quantity);
			prices.push("" + results[i].price);

			console.log("ID: " + results[i].item_id);
			console.log("Item: " + results[i].product_name);
			console.log("Price: $" + results[i].price);
			console.log("");

		}

			// set up inquirer to prompt user which item that he/she would like to purchase
			// the user will given a list to choose from
			inquirer.prompt([
				{
					name: "product",
					type: "rawlist",
					message: "What is the ID of the product you would like to purchase?",
					choices: id
				}
			]).then(function(answers) {
				// create switch statement for each item
				switch (answers.product) {
					case id[0]: 
						// set up another inquirer to prompt how many units the user would like to purchase
						// the user must make a valid quantity choice or else he/she will receive a comment
						inquirer.prompt([
							{
								name: "stock",
								message: "How many units of this product would you like to buy?",
								validate: function(value) {
									if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= quantity[0]) {
										return true;
									} else {
										console.log("\nInsufficient quantity!");
										return false;
									}
								}
							}
						]).then(function(answer) {
							// set up a variable for the units
							var units = answer.stock;

							// set up another query to update the mysql query
							var updateQuery = connect.query(
								"UPDATE products SET stock_quantity = stock_quantity - " + units + " WHERE item_id = " + id[0],
								function(error, res){
								});

							// create a variable for the cost of the user's purchase
							var cost = units * prices[0];
							console.log("Your total cost is $" + cost);

							// end the connection
							connect.end();
						});
						break;					
					case id[1]:
						// set up another inquirer to prompt how many units the user would like to purchase
						// the user must make a valid quantity choice or else he/she will receive a comment
						inquirer.prompt([
							{
								name: "stock",
								message: "How many units of this product would you like to buy?",
								validate: function(value) {
									if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= quantity[1]) {
										return true;
									} else {
										console.log("\nInsufficient quantity!");
										return false;
									}
								}
							}
						]).then(function(answer) {
							// set up a variable for the units
							var units = answer.stock;

							// set up another query to update the mysql query
							var updateQuery = connect.query(
								"UPDATE products SET stock_quantity = stock_quantity - " + units + " WHERE item_id = " + id[1],
								function(error, res){
								});

							// create a variable for the cost of the user's purchase
							var cost = units * prices[1];
							console.log("Your total cost is $" + cost);

							// end the connection
							connect.end();
						});
						break;
					case id[2]:
						// set up another inquirer to prompt how many units the user would like to purchase
						// the user must make a valid quantity choice or else he/she will receive a comment
						inquirer.prompt([
							{
								name: "stock",
								message: "How many units of this product would you like to buy?",
								validate: function(value) {
									if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= quantity[2]) {
										return true;
									} else {
										console.log("\nInsufficient quantity!");
										return false;
									}
								}
							}
						]).then(function(answer) {
							// set up a variable for the units
							var units = answer.stock;

							// set up another query to update the mysql query
							var updateQuery = connect.query(
								"UPDATE products SET stock_quantity = stock_quantity - " + units + " WHERE item_id = " + id[2],
								function(error, res){
								});

							// create a variable for the cost of the user's purchase
							var cost = units * prices[2];
							console.log("Your total cost is $" + cost);

							// end the connection
							connect.end();
						});					
						break;
					case id[3]:
						// set up another inquirer to prompt how many units the user would like to purchase
						// the user must make a valid quantity choice or else he/she will receive a comment
						inquirer.prompt([
							{
								name: "stock",
								message: "How many units of this product would you like to buy?",
								validate: function(value) {
									if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= quantity[3]) {
										return true;
									} else {
										console.log("\nInsufficient quantity!");
										return false;
									}
								}
							}
						]).then(function(answer) {
							// set up a variable for the units
							var units = answer.stock;

							// set up another query to update the mysql query
							var updateQuery = connect.query(
								"UPDATE products SET stock_quantity = stock_quantity - " + units + " WHERE item_id = " + id[3],
								function(error, res){
								});

							// create a variable for the cost of the user's purchase
							var cost = units * prices[3];
							console.log("Your total cost is $" + cost);

							// end the connection
							connect.end();
						});
						break;
				}
			}).catch(function (error) {
				console.log(error);
			});
		});
}

runStore();