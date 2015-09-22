/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../calendar/CalendarHelper.ts"/>

module CalendarModule
{
	describe("Tests the calculation of nth weekdays relative to a date", () => {

		it("for 1st Advent", () => {
			var result = CalendarHelper
				.calcDateByNthWeekdayRelativeToDate(25, 12, 2015, -4, Weekday.Sunday);
			expect(result.day).toBe(29);
			expect(result.month).toBe(11);
			expect(result.year).toBe(2015);
		});

		it("for 4th Advent", () => {
			var result = CalendarHelper
				.calcDateByNthWeekdayRelativeToDate(25, 12, 2015, -1, Weekday.Sunday);
			expect(result.day).toBe(20);
			expect(result.month).toBe(12);
			expect(result.year).toBe(2015);
		});

		it("for Sunday after Christmas Eve", () => {
			var result = CalendarHelper
				.calcDateByNthWeekdayRelativeToDate(25, 12, 2015, 1, Weekday.Sunday);
			expect(result.day).toBe(27);
			expect(result.month).toBe(12);
			expect(result.year).toBe(2015);
		});
	});
}
