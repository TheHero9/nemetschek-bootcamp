import input from "./inputs.json";

let { warehouses, customers, orders, typesOfDrones } = input;

import { completeOrders } from "./completeOrder";

console.log(completeOrders(warehouses, customers, orders));
