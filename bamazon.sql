DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL, -- not sure if this is right --
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 4) NOT NULL,
    stock_quantity INT NOT NULL,
	PRIMARY KEY (item_id) -- not sure if this is right --
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Winter Jacket", "Clothing", 50.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Biography of Kelvin", "Books", 19.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chicago Bulls Winter Hat", "Clothing", 12.50, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Workout Headphones", "Electronics", 100, 1);

SELECT * FROM products;
