const numberChecker = require("./numberChecker");

describe("numberChecker", () => {
	test("returns true if number is 6", () => {
		expect(numberChecker(6)).toBe(true);
	});
});
