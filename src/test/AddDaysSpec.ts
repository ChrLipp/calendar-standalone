/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../calendar/CalendarHelper.ts"/>

module CalendarModule
{
    describe("Tests the addDays function", () => {
        var reference : CalendarDay;

        beforeEach(() => {
            reference = {day: 1, month: 1, year: 2015};
        });

        it("for adding 0", () => {
            var result = CalendarHelper.addDays(reference, 0);
            expect(result.day).toBe(reference.day);
            expect(result.month).toBe(reference.month);
            expect(result.year).toBe(reference.year);
        });

        it("for adding 1", () => {
            var result = CalendarHelper.addDays(reference, 1);
            expect(result.day).toBe(2);
            expect(result.month).toBe(reference.month);
            expect(result.year).toBe(reference.year);
        });

        it("for adding 365", () => {
            var result = CalendarHelper.addDays(reference, 365);
            expect(result.day).toBe(reference.day);
            expect(result.month).toBe(reference.month);
            expect(result.year).toBe(reference.year + 1);
        });

        it("for subtracting 1", () => {
            var result = CalendarHelper.addDays(reference, -1);
            expect(result.day).toBe(31);
            expect(result.month).toBe(12);
            expect(result.year).toBe(2014);
        });

        // Testcase necessary for UTC time
        it("for subtracting 47", () => {
            reference = {day: 5, month: 4, year: 2015, name: 'Ostersonntag'};
            var result = CalendarHelper.addDays(reference, -47);
            expect(result.day).toBe(17);
            expect(result.month).toBe(2);
            expect(result.year).toBe(2015);
        });
    });
}
