DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(45) NULL,
department_name VARCHAR(45) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lamp", "furniture", "15.00", "3"),
("table", "furniture", "12.00", "2"),
("chair", "furniture", "20.00", "1"),
("sofa", "furniture", "200.00", "5"),
("blouse", "clothing", "20.00", "3"),
("pants", "clothing", "15.00", "5"),
("shoes", "footwear", "25.00", "2"),
("notebook", "office", "3.99", "5"),
("spatula", "cooking", "9.99", "3"),
("mixer", "cooking", "55.00", "2");