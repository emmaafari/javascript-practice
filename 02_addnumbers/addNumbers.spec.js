const addNumbers = require("./addNumbers");

describe("addNumbers", () => {
	test("should return the sum of two numbers", () => {
		expect(addNumbers()).toEqual(15);
	});
});
