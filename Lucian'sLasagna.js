 // 1. The number of minutes the lasagna should stay in the oven according to the cookbook.
 
export const EXPECTED_MINUTES_IN_OVEN = 40;

/**
 * 2. Determines the number of minutes the lasagna still has to remain in the oven.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */
export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

/**
 * 3. Given a number of layers, determines the total preparation time in minutes.
 *
 * @param {number} numberOfLayers
 * @returns {number} the total preparation time
 */
export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * 2;
}

/**
 * 4. Calculates the total time spent spent preparing and cooking the lasagna.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total time spent spent working on the lasagna
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}
console.log('remainig oven time:', remainingMinutesInOven(30));