let { ChangeHandler } = require("../src/changehandler");

describe("Tests for ChangeHandler", function() {
  // Set up a test below...
  test("The ChangeHandler class is defined.", function() {
    let test = new ChangeHandler(1);
    // Remember, you can arrange, act, and assert...start small
    expect(test).toBeDefined();
  });
  test("ammountDue is set based on an argument", function() {
    let test = new ChangeHandler(1);
    // Remember, you can arrange, act, and assert...start small
    expect(test.amountDue).toBe(1);
  });
  test("cashtenderend is set based on an zero", function() {
    let test = new ChangeHandler(999);
    // Remember, you can arrange, act, and assert...start small
    expect(test.cashTendered).toBe(0);
  });
  test("inserting a quarter adds 25", function() {
    let test = new ChangeHandler(999);
    test.insertCoin("quarter");
    // Remember, you can arrange, act, and assert...start small
    expect(test.cashTendered).toBe(25);
  });
  test("inserting a dime adds 10", function() {
    let test = new ChangeHandler(999);
    test.insertCoin("dime");
    // Remember, you can arrange, act, and assert...start small
    expect(test.cashTendered).toBe(10);
  });
  test("inserting a nickle add 5", function() {
    let test = new ChangeHandler(999);
    test.insertCoin("nickel");
    // Remember, you can arrange, act, and assert...start small
    expect(test.cashTendered).toBe(5);
  });
  test("inserting a penny adds 1", function() {
    let test = new ChangeHandler(999);
    test.insertCoin("penny");
    // Remember, you can arrange, act, and assert...start small
    expect(test.cashTendered).toBe(1);
  });
  test("calling function multiple times takes away from the ammount", function() {
    let test = new ChangeHandler(999);
    test.insertCoin("penny");
    test.insertCoin("penny");
    // Remember, you can arrange, act, and assert...start small
    expect(test.cashTendered).toBe(2);
  });
  test("returns true if cash tendered is more than amount due.", function() {
    let test = new ChangeHandler(5);
    test.insertCoin("dime");
    // Remember, you can arrange, act, and assert...start small
    expect(test.isPaymentSufficient()).toBe(true);
  });
  test("returns false if cash tendered is less than amount due.", function() {
    let test = new ChangeHandler(5);
    test.insertCoin("penny");
    // Remember, you can arrange, act, and assert...start small
    expect(test.isPaymentSufficient()).toBe(false);
  });
  test("returns false if cash tendered is the same than amount due.", function() {
    let test = new ChangeHandler(5);
    test.insertCoin("nickel");
    // Remember, you can arrange, act, and assert...start small
    expect(test.isPaymentSufficient()).toBe(false);
  });
  test("32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2", function() {
    let test = new ChangeHandler(32);
    test.insertCoin(0);
    // Remember, you can arrange, act, and assert...start small
    expect(test.giveChange()).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2
    });
  });
});
