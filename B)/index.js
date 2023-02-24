import input from "./inputs.json";

let { warehouses, customers, orders } = input;
import { dayOfWorkMaxDrones } from "./dayOfWorkMaxDrones";

console.log(dayOfWorkMaxDrones(warehouses, customers, orders));
