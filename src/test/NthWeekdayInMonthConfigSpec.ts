/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../calendar/CalendarHelper.ts"/>

module CalendarModule
{
	describe("Tests the configuration of occuring week days", () => {
		var config = {
			configNthWeekdayInMonthDays : [
				{
					"weekCount"     : 2,
					"weekday"       : 7,
					"month"         : 5,
					"name"          : "Muttertag",
					"isFeastDay"    : false
				}, {
					"weekCount"     : 2,
					"weekday"       : 7,
					"month"         : 6,
					"name"          : "Vatertag",
					"isFeastDay"    : false
				}]
		};

		var calendarDayEntries : CalendarDayEntries;

		beforeAll(() => {
			calendarDayEntries = new CalendarDayEntries(config);
		});

		it("for Mother's day 2015", () => {
			var entry = calendarDayEntries.getDayEntry('20150510');
			expect(entry.name).toBe('Muttertag');
			expect(entry.isFeastDay).toBeFalsy();
		});

		it("for Father's day 2015", () => {
			var entry = calendarDayEntries.getDayEntry('20150614');
			expect(entry.name).toBe('Vatertag');
			expect(entry.isFeastDay).toBeFalsy();
		});
	});
}
