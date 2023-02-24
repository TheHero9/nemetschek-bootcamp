import input from "./inputs.json";
import { dayOfWorkOneDrone } from "./dayOfWorkOneDrone";
let { warehouses, customers, orders } = input;

// Execute a day of work with the current inputs from an external .json file
console.log(dayOfWorkOneDrone(warehouses, customers, orders));
