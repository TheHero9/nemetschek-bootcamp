import { Drones } from "./Drones.js";
export const dayOfWorkMaxDrones = (warehouses, customers, orders) => {
  let num = 1;
  let totalTimeForAllOrders = 0;

  let ordersTimeArray = [];
  let droneCount;

  // Loop through the json file and return all the ordered times
  for (let order of orders) {
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

    // Debug information
    //   console.log(`
    // From: {x: ${drone.warehouseCoords.x}, y: ${drone.warehouseCoords.y}}
    // To: {x: ${drone.customerCoords.x}, y: ${drone.customerCoords.y}}

    // Current time for order Number ${num}: ${drone.measureDistance()}
    // min.
    // `);

    // Increment the total time for a single drone to complete all orders
    totalTimeForAllOrders += drone.measureDistance();

    // Add all the times into an array
    ordersTimeArray.push(drone.measureDistance());
    // The maximum number of drones we can use = all number of orders
    droneCount = Object.keys(orders).length;
    num++;
  }

  // 6. Answer
  return `✔️ Max drones needed ${droneCount} and the orders will be completed: ${Math.max(
    ...ordersTimeArray
  )} min`;
};
