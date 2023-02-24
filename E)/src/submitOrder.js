// Array with different products
let productList = [];

// Function to add each type of element to the productList array
export const addElement = () => {
  let type = document.getElementById("product-select").value;
  const quantity = document.getElementById("quantity").value;

  // Add the type with the quantity from the inputs
  const data = { [type]: parseFloat(quantity) };

  // Display the order
  let text = document.getElementById("orderTotal").innerHTML;
  document.getElementById("orderTotal").innerHTML =
    text + `<br> ${type}: ${quantity}`;

  // Push all the elements into the array
  productList.push(data);
};

// Return the array with the items
export const submitProducts = () => {
  return productList;
};

// Submit and combine all the products into one order
export const submitOrder = (orders) => {
  const customerId = document.getElementById("customerId").value;

  // 1. Drstructure the array object
  const allProducts = orders.reduce((acc, curr) => {
    const key = Object.keys(curr)[0];
    const value = curr[key];
    acc[key] = value;
    return acc;
  }, {});

  // 2. Combine the customerId with his order
  const orderComplete = {
    customerId: parseFloat(customerId),
    productList: allProducts
  };

  // 3. Reset the starting values
  productList = [];
  let text = (document.getElementById("orderTotal").innerHTML =
    "You ordered: ");

  return orderComplete;
};
