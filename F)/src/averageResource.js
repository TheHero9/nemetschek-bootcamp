import input from "./inputs.json";
let { warehouses, customers, orders, typesOfDrones } = input;
import { completeOrders } from "./completeOrders";

export const averageResource = (
  warehouses,
  customers,
  orders,
  typesOfDrones
) => {
  const deliveries = completeOrders(
    warehouses,
    customers,
    orders,
    typesOfDrones
  );
  return deliveries;
};
