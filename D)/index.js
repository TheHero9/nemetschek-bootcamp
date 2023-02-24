import input from "./inputs.json";
let { warehouses, customers, orders, typesOfDrones } = input;
import { completeOrders } from "./completeOrders";

// Get the order of completion of the orders with information
console.log(completeOrders(warehouses, customers, orders, typesOfDrones));
