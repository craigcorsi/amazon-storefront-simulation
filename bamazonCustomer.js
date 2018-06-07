var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

function readProducts() {
    console.log("\n\nSelecting all products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement

        console.log(`/----------------------------------------`);
        for (i = 0; i < res.length; i++) {
            var ob = res[i];
            console.log(`${ob.item_id}  ${ob.product_name}  \$ ${ob.price}`);
        }
        console.log(`\\----------------------------------------
        
        `);

        askForId();
    });
}

function askForId() {
    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "Input the ID of the product would you like to buy."
        },
        {
            type: "input",
            name: "quantity",
            message: "How many of this item would you like to buy?"
        }
    ]).then(function (inputs) {

        connection.query("SELECT stock_quantity, price FROM products WHERE item_id= ?", [inputs.id], function (err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement

            if (res.length == 0) {
                console.log('Product not available. Try again.');
                connection.end();
            } else if (res[0].stock_quantity < inputs.quantity) {
                console.log('Insufficient quantity. Try again.');
                connection.end();
            } else {
                console.log(`Order processed! Your total comes to ${inputs.quantity} * \$${res[0].price} = \$${inputs.quantity * res[0].price}.`);
                buyItem(inputs.id, res[0].stock_quantity - inputs.quantity);
            }
        });
    });
}

function buyItem(id, new_quantity) {
    connection.query("UPDATE products SET stock_quantity = ? WHERE item_id= ?", [new_quantity, id], function(err, res){
        if (err) throw err;
        if (res) console.log('Thank you for shopping at Bamazon.');
        connection.end();
    });
}

readProducts();