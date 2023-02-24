import input from "./inputs.json";

let { products } = input;

products.forEach((product) => {
  const option = document.createElement("option");
  option.value = product;
  option.text = product;
  document.getElementById("product-select").appendChild(option);
});

// If we have json file with products

// Fetch the JSON data
// fetch("products.json")
//   .then((response) => response.json())
//   .then((data) => {
//     // Loop through the data and create an <option> tag for each product
//     data.forEach((product) => {
//       const option = document.createElement("option");
//       option.value = product.id;
//       option.text = product.name;
//       document.getElementById("product-select").appendChild(option);
//     });
//   });
