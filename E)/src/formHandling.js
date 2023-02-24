import { submitProducts, addElement, submitOrder } from "./sumbitOrder";
import input from "./inputs.json";

let { orders } = input;
// Orders array
const ordersArray = [...orders];

// Initialize the two forms
const addForm = document.getElementById("order-form");
const submitForm = document.getElementById("submit-form");

// Add Product form
addForm.addEventListener("submit", (event) => {
  event.preventDefault();

  addElement();
});



// Submit the order form
submitForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the output of the order
  const finishedOrder = submitOrder(submitProducts());
  const { productList } = finishedOrder;
  const products = Object.entries(productList);
  // console.log(products);

  // Output the order
  console.log(`New order: 
  from: ${finishedOrder.customerId}
  products: ${products} `);

  // Add the order to the order array
  ordersArray.push(finishedOrder);
  // Output all orders for the day
  console.log(ordersArray);
});
