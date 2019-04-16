# bamazon
Amazon-like storefront Node.js application created with JavaScript and MySQL. The app takes in orders from customers and depletes stock from the store's inventory.

In order to run this program in Node, first:
1) Initialize package.json.
2) Install mysql.
3) Install inquirer.

When running the program, the program initally displays a list of products from the database with various attributes.  The user is prompted asking which product they want to buy.

<img width="689" alt="bamazon_1" src="https://user-images.githubusercontent.com/46168781/56176973-9800e380-5fc2-11e9-9970-ab10aa77b6d6.PNG">

After the user enters a product ID of the product they want to buy, the user is prompted with the quantity that they want to buy.  If there are enough in stock, the program responds with a success message.

<img width="681" alt="bamazon_2" src="https://user-images.githubusercontent.com/46168781/56177005-bc5cc000-5fc2-11e9-91ea-af530e9dea53.PNG">

If the user chooses an item and quantity where there are not enough in stock, the program responds with a message that the request was unsuccessful.

<img width="668" alt="bamazon_3" src="https://user-images.githubusercontent.com/46168781/56177057-ec0bc800-5fc2-11e9-9ee6-83cab60aa533.PNG">

