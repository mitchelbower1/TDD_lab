/**
 * This class handles change for a vending machine.
 *
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
  constructor(amountDue) {
    this.amountDue = amountDue;
    this.cashTendered = 0;
  }

  /**
   * The customer inserts a coin, increasing the cashTendered.
   * The parameter "type" is a string that is either quarter, dime, nickel, or penny
   */
  insertCoin(typeOfCoin) {
    if (typeOfCoin === "quarter") {
      this.cashTendered += 25;
    } else if (typeOfCoin === "dime") {
      this.cashTendered += 10;
    } else if (typeOfCoin === "nickel") {
      this.cashTendered += 5;
    } else if (typeOfCoin === "penny") {
      this.cashTendered += 1;
    }
  }

  /**
   * Returns true if enough coins have been inserted to at least meet the amountDue
   */
  isPaymentSufficient() {
    if (this.cashTendered > this.amountDue) {
      return true;
    } else if (this.cashTendered === this.amountDue) {
      return false;
    } else {
      return false;
    }
  }

  giveChange() {
    // TODO return the correct change in the following format...
    let moneyLeft =[this.cashTendered];
      let coins = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 };
      for (let change in moneyLeft) {
        if (change / 25 >= 1) {
          coins.quarters = Math.floor(change / 25);
          moneyLeft.push(change % 25);
        } else if (change / 10 >= 1) {
          coins.dimes = Math.floor(change / 10);
          moneyLeft.push(change % 10);
        } else if (change / 5 >= 1) {
          coins.nickels = Math.floor(change / 5);
          moneyLeft.push(change % 5);
        } else if (change / 1 >= 1) {
          coins.pennies = Math.floor(change / 1);
          moneyLeft.push(change % 1);
        }
      }
    return coins;

module.exports = { ChangeHandler };
