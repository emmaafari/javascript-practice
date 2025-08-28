const helloworld = require("./helloworld");

describe("helloworld", function () {
	test("says, Hello, World!", function () {
		expect(helloworld()).toEqual("Hello, World!");
	});
});
