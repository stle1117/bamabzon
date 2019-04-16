var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({

    host: "localhost",

    port: 3306,

    user: "root",

    password: "",

    database: "bamazonDB",

});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadID + "\n");

    displayProducts();
});

function displayProducts() {
    console.log("Here are our products...\n");
    connection.query("SELECT * FROM products", function (err, res) {

        if (err) throw err;
        console.table(res);

        start(res);
        // connection.end();

    });
}


function start(results) {
    inquirer
        .prompt([
            {
            name: "idOfProduct",
            type: "number",
            message: "What is the ID of the product you would like to buy?",
        },
        {
            name: "stock_quantity",
            type: "number",
            message: "What is the quantity of the product you would like to buy?",
        }
    ])
        .then(function (answer) {
            var chosenItem;
        
            for (var i = 0; i < results.length; i++) {
                //console.log(results[i].item_id);
                if (results[i].item_id === answer.idOfProduct) {
                    
                    chosenItem = results[i];

                }
            }
            //console.log(results);
            console.table(chosenItem);
            console.log(chosenItem.stock_quantity);
            console.log(answer.stock_quantity);
            var newQuantity = chosenItem.stock_quantity - answer.stock_quantity;
            if (chosenItem.stock_quantity >= answer.stock_quantity) {
                connection.query(

                    "UPDATE products SET ? WHERE ?",

                    [{
                        stock_quantity: newQuantity
                    },
                    {
                        item_id: chosenItem.id
                    }
                    ],
                    function (error) {
                        if (error) throw err;
                        console.log("Item ordered successfully!");

                        start();

                    })
            }
            else {
                console.log("That item is out of stock, unfortunatley.  Please choose another item.");
                start();
            }
        })
}



