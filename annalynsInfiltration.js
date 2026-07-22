/**
 * 1. Check if the 'Fast Attack' action is possible.
 * Fast attack can be made if the knight is sleeping.
 *
 * @param {boolean} knightIsAwake
 * @returns {boolean}
 */
export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

/**
 * 2. Check if the 'Spy' action is possible.
 * Spying is possible if at least one character is awake.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @returns {boolean}
 */
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

/**
 * 3. Check if the 'Signal Prisoner' action is possible.
 * Signaling is possible if the prisoner is awake and the archer is sleeping.
 *
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @returns {boolean}
 */
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return prisonerIsAwake && !archerIsAwake;
}

/**
 * 4. Check if the 'Free Prisoner' action is possible.
 * Freeing the prisoner can succeed in two scenarios:
 * 1. If the pet dog is present, the archer must be sleeping.
 * 2. If the pet dog is NOT present, the prisoner must be awake, and both knight and archer must be sleeping.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @param {boolean} petDogIsPresent
 * @returns {boolean}
 */
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if (petDogIsPresent) {
    return !archerIsAwake;
  }

  return prisonerIsAwake && !knightIsAwake && !archerIsAwake;
}
console.log('can fast attack {knight awake=true}: ', canExecuteFastAttack(true));
console.log('can free prisoner(perDogPresent=true):', canFreePrisoner());