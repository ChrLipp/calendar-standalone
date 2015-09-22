/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../calendar/CalendarHelper.ts"/>

module CalendarModule
{
	describe("Tests the calculation of weekdays", () => {

		it("for 06.06.2015", () => {
			var date = {
				day     : 6,
				month   : 6,
				year    : 2015
			};

			var result = CalendarHelper.getWeekday(date);
			expect(result).toBe(Weekday.Saturday);
		});

		it("for 14.06.2015", () => {
			var date = {
				day     : 14,
				month   : 6,
				year    : 2015
			};

			var result = CalendarHelper.getWeekday(date);
			expect(result).toBe(Weekday.Sunday);
		});

		it("for 07.11.1998", () => {
			var date = {
				day     : 7,
				month   : 11,
				year    : 1998
			};

			var result = CalendarHelper.getWeekday(date);
			expect(result).toBe(Weekday.Saturday);
		});
	});
}
