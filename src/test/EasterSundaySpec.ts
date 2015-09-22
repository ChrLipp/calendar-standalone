/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../calendar/CalendarHelper.ts"/>

module CalendarModule
{
	describe("Tests the calculation of the easter sunday for", () => {

		it("the given year 1981", () => {
			var result = CalendarDayEntries["calcEasterSunday"](1981);
			expect(result.day).toBe(19);
			expect(result.month).toBe(4);
		});

		it("the given year 2015", () => {
			var result = CalendarDayEntries["calcEasterSunday"](2015);
			expect(result.day).toBe(5);
			expect(result.month).toBe(4);
		});

		it("the given year 2016", () => {
			var result = CalendarDayEntries["calcEasterSunday"](2016);
			expect(result.day).toBe(27);
			expect(result.month).toBe(3);
		});

		it("the given year 2017", () => {
			var result = CalendarDayEntries["calcEasterSunday"](2017);
			expect(result.day).toBe(16);
			expect(result.month).toBe(4);
		});

		it("the given year 2018", () => {
			var result = CalendarDayEntries["calcEasterSunday"](2018);
			expect(result.day).toBe(1);
			expect(result.month).toBe(4);
		});
	});
}
