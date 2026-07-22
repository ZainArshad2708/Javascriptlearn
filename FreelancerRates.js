/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */

export function dayRate(ratePerHour) {
   return ratePerHour*8;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */

export function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget/dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const BILLABLE_DAYS_PER_MONTH = 22;
  const standardDayRate = dayRate(ratePerHour);

  const fullMonths = Math.floor(numDays / BILLABLE_DAYS_PER_MONTH);
  const remainingDays = numDays % BILLABLE_DAYS_PER_MONTH;

  // Monthly cost with discount applied
  const monthlyRate = BILLABLE_DAYS_PER_MONTH * standardDayRate;
  const discountedMonthlyRate = monthlyRate * (1 - discount);
  const totalMonthsCost = fullMonths * discountedMonthlyRate;

  // Remaining days billed at standard day rate
  const totalRemainingDaysCost = remainingDays * standardDayRate;

  return Math.ceil(totalMonthsCost + totalRemainingDaysCost);
  
}
console.log('Price with discount:', priceWithMonthlyDiscount(89, 230, 0.42));
//should print 97972
console.log('Price with discount', priceWithMonthlyDiscount(100, 257, 0.23));
//should print 161072