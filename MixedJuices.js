/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5; // Shared return for both 'Energizer' and 'Green Garden'
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5; // Default time for all other drinks
  }
}


/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  
  let wedgesCut = 0;
  let limesCut = 0;

  while (wedgesCut < wedgesNeeded && limesCut < limes.length) {
    const currentLime = limes[limesCut];

    switch (currentLime) {
      case 'small':
        wedgesCut += 6;
        break;
      case 'medium':
        wedgesCut += 8;
        break;
      case 'large':
        wedgesCut += 10;
        break;
    }

    limesCut++;
  }

  return limesCut;
}


/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  
  while (timeLeft > 0 && orders.length > 0) {
    const nextJuice = orders.shift();
    timeLeft -= timeToMixJuice(nextJuice);
  }

  return orders;
}
//print ['Green Garden']
console.log('Remainig orders: ', remainingOrders(5, ['Energizer','All or Nothing', 'Green Garden']));