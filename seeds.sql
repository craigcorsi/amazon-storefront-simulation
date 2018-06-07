USE DATABASE bamazon;

/*

Seeds for 'products' table which allows a customer to purchase from the listing of items

*/

CREATE TABLE products (
	item_id integer not null auto_increment,
	product_name varchar(100) not null,
	department_name varchar(100) default null,
	price decimal(10,2) default 0.00,
	stock_quantity integer(10) default 0,
	primary key (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ('ZIPZAP Wireless Keyboard', 'Electronics', 54.99, 45),
('HORIZON UNIVERSAL 32 Inch Smart TV', 'Electronics', 624.99, 30),
('PANTHERLINK 17GB Router Modem', 'Electronics', 69.99, 25),
('ARON MCCLOSKEY Capri Pants Seafoam Green', 'Clothing and Accessories', 19.99, 35),
('ARON MCCLOSKEY Summer Hat Off White', 'Clothing and Accessories', 12.99, 25),
('ENVISIGN GLOBAL Running Shorts Grey', 'Clothing and Accessories', 14.99, 60),
('ENVISIGN GLOBAL Smart Running Wristband', 'Clothing and Accessories', 4.99, 200),
('TODAYS RECKONING Mens Grooming Kit', 'Health and Beauty', 39.99, 35),
('YESTERDAYS SHADOW Straight Razor', 'Health and Beauty', 74.99, 55),
('VERA SMEUTH Womens Deodorant', 'Health and Beauty', 7.99, 5),
('NEWHOME Bath Bursting Soap 8 Pack', 'Health and Beauty', 19.99, 5);