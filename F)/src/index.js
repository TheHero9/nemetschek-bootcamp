import input from "./inputs.json";
let { warehouses, customers, orders, typesOfDrones } = input;
import { averageResource } from "./averageResource.js";

// Average Time
console.log(averageResource(warehouses, customers, orders, typesOfDrones));
