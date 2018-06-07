USE DATABASE bamazon;

/*

Schema for 'products' table which allows a customer to purchase from the listing of items

*/

CREATE TABLE products (
	item_id integer not null auto_increment,
	product_name varchar(100) not null,
	department_name varchar(100) default null,
	price decimal(10,2) default 0.00,
	stock_quantity integer(10) default 0,
	primary key (item_id)
);
