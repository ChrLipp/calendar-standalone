/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../calendar/CalendarHelper.ts"/>

module CalendarModule
{
	describe("Tests the calculation of calcDateByWDMY", () => {

		it("for the first Tuesday in September 2015", () => {
			var result = CalendarHelper.calcDateByWDMY(1, Weekday.Tuesday, 9, 2015);
			expect(result.day).toBe(1);
			expect(result.month).toBe(9);
			expect(result.year).toBe(2015);
		});

		it("for the second Sunday in December 2015", () => {
			var result = CalendarHelper.calcDateByWDMY(2, Weekday.Sunday, 12, 2015);
			expect(result.day).toBe(13);
			expect(result.month).toBe(12);
			expect(result.year).toBe(2015);
		});

		it("for the last Sunday in September 2015", () => {
			var result = CalendarHelper.calcDateByWDMY(0, Weekday.Sunday, 9, 2015);
			expect(result.day).toBe(27);
			expect(result.month).toBe(9);
			expect(result.year).toBe(2015);
		});
	});
}
