export class Drones {
    constructor(warehouseCoords, customerCoords, orders) {
      this.warehouseCoords = warehouseCoords;
      this.customerCoords = customerCoords;
      this.orders = orders;
    }
  
    measureDistance(warehouseCoords, customerCoords, orders) {
      // Number of unique products from the customer
      let numberOfProducts = Object.keys(this.orders).length;
  
      // Get the time for a single order
      let oneTimeRun =
        Math.abs(this.warehouseCoords.x - this.customerCoords.x) +
        Math.abs(this.warehouseCoords.y - this.customerCoords.y);
  
      // The total time = time for an order * number of products ordered
      let timeForAnOrder = oneTimeRun * numberOfProducts;
  
      // Return the total time
      return timeForAnOrder;
    }
  }
  