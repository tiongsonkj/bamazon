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
			console.log("\nHere are the items that are available for purchase.\n");

		var id = [];
		var quantity = [];
		var prices = [];

		for (var i = 0; i < results.length; i++) {
			id.push("" + results[i].item_id);
			quantity.push("" + results[i].stock_quantity);
			prices.push("" + results[i].price);

			console.log("ID: " + results[i].item_id);
			console.log("Item: " + results[i].product_name);
			console.log("Price: $" + results[i].price);
			console.log("");

		}
			inquirer.prompt([
				{
					name: "product",
					type: "rawlist",
					message: "What is the ID of the product you would like to purchase?",
					choices: id
				}
			]).then(function(answers) {
				switch (answers.product) {
					case id[0]: 
						console.log("You chose the winter jacket!")
						console.log("We have this much in stock: " + quantity[0]);

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
							var units = answer.stock;

							console.log("You chose this many units: " + units);

							var updateQuery = connect.query(
								"UPDATE products SET stock_quantity = stock_quantity - " + units + " WHERE item_id = " + id[0],
								function(error, res){
								});

							var cost = units * prices[0];
							console.log("Your total cost is $" + cost);

							var showUpdatedQuery = connect.query(
								"SELECT * FROM products",
								function(error, updatedResults){
									console.log("We have this many units left now of the winter jacket: " + updatedResults[0].stock_quantity);
								});
						});
						break;					
					case id[1]:
						console.log("You chose the 'Biography of Kelvin' !")
						console.log("We have this much in stock: " + results[1].stock_quantity);

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
							var units = answer.stock;

							console.log("You chose this many units: " + units);

							var updateQuery = connect.query(
								"UPDATE products SET stock_quantity = stock_quantity - " + units + " WHERE item_id = " + id[1],
								function(error, res){
								});

							var showUpdatedQuery = connect.query(
								"SELECT * FROM products",
								function(error, updatedResults){
									console.log("We have this many units left now of the winter jacket: " + updatedResults[1].stock_quantity);
								});
						});
						break;
					case id[2]:
						console.log("You chose the Chicago Bulls Winter Hat!")
						console.log("We have this much in stock: " + results[2].stock_quantity);

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
							var units = answer.stock;

							console.log("You chose this many units: " + units);

							var updateQuery = connect.query(
								"UPDATE products SET stock_quantity = stock_quantity - " + units + " WHERE item_id = " + id[2],
								function(error, res){
								});

							var showUpdatedQuery = connect.query(
								"SELECT * FROM products",
								function(error, updatedResults){
									console.log("We have this many units left now of the winter jacket: " + updatedResults[2].stock_quantity);
								});
						});
						break;
					case id[3]:
						console.log("You chose the Workout Headphones!")
						console.log("We have this much in stock: " + results[3].stock_quantity);

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
							var units = answer.stock;

							console.log("You chose this many units: " + units);

							var updateQuery = connect.query(
								"UPDATE products SET stock_quantity = stock_quantity - " + units + " WHERE item_id = " + id[3],
								function(error, res){
								});

							var showUpdatedQuery = connect.query(
								"SELECT * FROM products",
								function(error, updatedResults){
									console.log("We have this many units left now of the winter jacket: " + updatedResults[3].stock_quantity);
								});
						});
						break;
				}
			}).catch(function (error) {
				console.log(error);
			});
		});
}

runStore();