export const powerOfDrones = (typeOf) => {
    // Array with objects for the drones
    const convertedPower = [];
    

    // Convert all the kW to W
    for (let drone of typeOf) {
      let length = drone.capacity.length;
      let watts;
      if (drone.capacity[length - 2] == "k") {
        watts = parseFloat(drone.capacity) * 1000;
      } else {
        watts = parseFloat(drone.capacity);
      }

    //   Push the pairs inbto the array
      convertedPower.push({
        capacity: watts,
        consumption: parseFloat(drone.consumption)
      });
    }
  
    return convertedPower;
  };
  