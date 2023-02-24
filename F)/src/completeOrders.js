import { dronetime } from "./dronetime.js";
import { averageTime } from "./averageTime";

// Main function asynchronous
async function completeOrders(warehouses, customers, orders) {
  const deliveryQueue = [];

  // Loop and get the delivery time
  for (let order of orders) {
    const deliveryPromise = dronetime(order, customers, warehouses);
    deliveryQueue.push(deliveryPromise);
  }
  // Wait for the response
  const deliveryResults = await Promise.all(deliveryQueue);

  // Sort everything
  deliveryResults.sort((a, b) => a.time - b.time);

  // Loop and get all the information needed based on the order
  for (const result of deliveryResults) {
    const { customerNumber, time, productList } = result;

    const keyValueStrings = Object.entries(productList).map(
      ([key, value]) => `
    ${key}: ${value}`
    );
    const orderProducts = keyValueStrings.join(", ");

    // Output the information
    //     console.log(`Order from customer with ID: ${customerNumber} delivered in ${time} seconds.
    // Products:
    //     ${orderProducts}
    //     `);
  }
}

export { completeOrders };
