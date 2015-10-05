module CalendarModule
{
	/** Simple date */
	export interface CalendarDay {
		day         : number;
		month       : number;
		year        : number;
	}

	/**
	 * Calender helper functionality for the Gregorian calendar.
	 * The function addDays should normally work with Julian Days. For performance reasons
	 * the milliseconds from 1.1.1970 are used, therefor the 1.1.1970 is the minimal date.
	 */
	export class CalendarHelper
	{
		/** Constant for the milliseconds of a day. */
		private static MILLIS_OF_A_DAY : number = 1000 * 60 * 60 * 24;

		/**
		 * Adds an amount of days to a given date.
		 * This  function should normally work with Julian Days. For performance reasons
		 * the milliseconds from 1.1.1970 are used, therefor the 1.1.1970 is the minimal date.
		 * @param base          given date
		 * @param deltaDays     amount of days
		 * @returns {{day: number, month: number, year: number}} The new date
		 */
		static addDays(base : CalendarDay, deltaDays : number) : CalendarDay
		{
			var baseMillis = Date.UTC(base.year, base.month - 1, base.day);
			var targetDate = new Date(baseMillis + deltaDays * CalendarHelper.MILLIS_OF_A_DAY);

			return {
				day: targetDate.getDate(),
				month: targetDate.getMonth() + 1,
				year: targetDate.getFullYear()
			};
		}

		/**
		 * Calculates the week day for the given date.
		 * @param calendarDay   given date
		 * @returns {number}    week day
		 */
		static getWeekday(calendarDay : CalendarDay) : number
		{
			var dow = Date.UTC(calendarDay.year, calendarDay.month - 1, calendarDay.day);
			dow = Math.floor(dow / CalendarHelper.MILLIS_OF_A_DAY);
			dow = (dow + 3) % 7 + 1;

			return dow;
		}

		/**
		 * Calculates a date constructed by the week number, the week day and the month.
		 * For example, the first Wednesday in September 2015 ic calculated with
		 * calcDateByWDMY(1, Weekday.Wednesday, 9, 2015)
		 * and the last Sunday in September 2015 is calculated with
		 * calcDateByWDMY(0, Weekday.Sunday, 9, 2015)
		 * @param weekCount week number (0 means last week)
		 * @param weekday   week day
		 * @param month     month
		 * @param year      year
		 * @returns {{day, month, year}|CalendarDay}
		 */
		static calcDateByWDMY(
			weekCount : number, weekday : Weekday, month : number, year : number) : CalendarDay
		{
			// if week is 0 (means last week in month), we have to add 1 month
			if (weekCount == 0) {
				month++;
				if (month > 12) {
					month = 1;
					year++;
				}
			}

			// start with the first of the given month
			var dateFirstOfMonth = {
				day     : 1,
				month   : month,
				year    : year
			};

			// adjust the week day and the week
			var delta = weekday - CalendarHelper.getWeekday(dateFirstOfMonth);
			if (delta > -1) {
				weekCount--;
			}

			return CalendarHelper.addDays(dateFirstOfMonth, delta + weekCount * 7);
		}

		/**
		 * Calculates a date relative to a given reference date. The result date is specified
		 * by the weekday and the amount of weeks between reference date and result date.
		 * E.g. calculate the first sunday before December, 25th will calculate the
		 * 4th Advent with the following call:
		 *      calcDateByNthWeekdayRelativeToDate(25, 12, 2015, -1, Weekday.Sunday);
		 * @param day       day of reference date
		 * @param month     month of reference date
		 * @param year      year of reference date
		 * @param weekCount amount of weeks relative to the reference date
		 * @param weekday   the Weekday of the result
		 * @returns {{day, month, year}|CalendarDay}
		 */
		static calcDateByNthWeekdayRelativeToDate(
			day : number, month : number, year : number,
			weekCount : number, weekday : Weekday) : CalendarDay
		{
			if (weekCount == 0) throw new Error("weekCount must not be 0");

			// set the reference date
			var dateReference = {
				day     : day,
				month   : month,
				year    : year
			};

			// adjust to the given week day and the week
			var delta = weekday - CalendarHelper.getWeekday(dateReference);
			if ((weekCount < 0) && (delta < 0)) {
				weekCount++;
			}
			else if ((weekCount > 0) && (delta > 0)) {
				weekCount--;
			}


			return CalendarHelper.addDays(dateReference, delta + weekCount * 7);
		}
	}
}