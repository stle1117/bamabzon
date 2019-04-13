var inquierer = require ("inquirer");
var mysql = require ("mysql");

var connection = mysql.createConnection ({

    host: "localhost",

    port: 3306,

    user: "root",

    password: "",

    database: "bamazonDB",

});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadID + "\n");

    displayProducts();
});

function displayProducts() {
    console.log("Here are our products...\n");
    connection.query("SELECT * FROM products", function(err, res) {

        if (err) throw err;
        console.log(res);
        
        connection.end();

    });
}


function start() {
    inquierer
        .prompt({
            name: "idOfProduct",
            type: "input",
            message: "What is the ID of the product you would like to buy?",
        })
            .then(function(answer) {
                var chosenItem;

                for (var i = 0; i < results.length; i++) {
                    if (results[i].product_name === answer.choice) {

                        chosenItem = results[i];

                    }
                }
            
            if (chosenItem.Item.quantity > parseInt(answer.stock_quantity);
            connection.query (

                "UPDATE products SET ? WHERE ?",

                [ {
                    quantity: answer.stock_quantity
                },
                {
                    item_id: chosenItem.id
                }
            ],
            function(error) {
                if error throw err;
                console.log("Item ordered successfully!");

                start();

            }
        else {
            console.log("That item is out of stock, unfortunatley.  Please choose another item.");
            start();
        }
                }]
            )

        })
}