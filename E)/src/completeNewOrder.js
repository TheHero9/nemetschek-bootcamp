import { Drones } from "./Drones.js";

export const completeNewOrder = (warehouses, customers, order) => {
  // let num = 1;
  // 1. Get who made the order
  let customerNumber = order.customerId;
  let customerProfile = customers[customerNumber - 1];

  // 2. Get the coordinates of the current customer
  let customerX = customerProfile.coordinates.x;
  let customerY = customerProfile.coordinates.y;
  let coordinatesCustomerCombined = { x: customerX, y: customerY };

  // 3. Closest warehouse
  // Array with the distances between all the warehouses and the current home
  let arrayWithDistances = [];

  // Find the minimum time between a warehouse and the client and return the number of the warehouse
  for (let warehouse of warehouses) {
    let currDistance =
      Math.abs(customerX - warehouse.x) + Math.abs(customerY - warehouse.y);
    arrayWithDistances.push(currDistance);
  }

  // Position in the json file with the closest warehouse
  let closestWarehouse = arrayWithDistances.indexOf(
    Math.min(...arrayWithDistances)
  );

  // 4. Object with products forom the order
  let products = order.productList;

  // 5. Create drone for the current client
  const drone = new Drones(
    warehouses[closestWarehouse],
    coordinatesCustomerCombined,
    products
  );

  // Output information
  const output = `
  !New Order started!
  From: {x: ${drone.warehouseCoords.x}, y: ${drone.warehouseCoords.y}}
  To: {x: ${drone.customerCoords.x}, y: ${drone.customerCoords.y}}

  Current time for order: ${drone.measureDistance()}
  min.
  `;

  // num++;

  // 6. Return Answer
  return output;
};
