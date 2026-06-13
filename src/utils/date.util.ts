import {
  addDays,
  addMonths,
  addYears,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  endOfDay,
  endOfMonth,
  format,
  isAfter,
  isBefore,
  isSameDay,
  isValid,
  parse,
  startOfDay,
  startOfMonth,
} from 'date-fns';

/**
 * [Const] Date format constants
 */
export const DATE_FORMATS = {
  FULL: 'yyyy/MM/dd HH:mm:ss',
  DATE_ONLY: 'dd/MM/yyyy',
  DATE_REVERSE_ONLY: 'yyyy/MM/dd',
  TIME_ONLY: 'HH:mm:ss',
} as const;

/**
 * [Type] Date utility types
 */
export type TDateFormat = (typeof DATE_FORMATS)[keyof typeof DATE_FORMATS];

/**
 * Date utility handler using date-fns library
 * [Format/Parse] Format and parse dates with specific formats
 * [Split] Split a date into specific parts of a date (day, month, year)
 * [Calculate] Add or subtract time units (days, months, years)
 * [Compare] Get difference in time units between two dates
 * [Start-End] Get start/end of time units
 * [Validate] Check if date is valid
 */
export default class DateUtil {
  /** [Const] Date format constants */
  static DATE_FORMATS = DATE_FORMATS;

  /**
   * Format a date to a specific format
   * @param date - Date to format
   * @param dateFormat - Format string (default: DATE_ONLY)
   * @returns Formatted date string
   */
  static format(
    date: Date | string,
    dateFormat: TDateFormat = DATE_FORMATS.DATE_ONLY
  ): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return format(dateObj, dateFormat);
  }

  /**
   * Parse a date string with a specific format
   * @param dateString - Date string to parse
   * @param dateFormat - Format string to match
   * @returns Parsed date
   */
  static parse(
    dateString: string,
    dateFormat: TDateFormat = DATE_FORMATS.DATE_ONLY
  ): Date {
    return parse(dateString, dateFormat, new Date());
  }

  /**
   * [Split] Get day of month from a date
   * @param date - Date object or date string to extract day from
   * @param startByZero - If true, returns zero-padded string (01-31), otherwise returns non-zero-padded string (1-31)
   * @returns Day of the month as non-zero-padded string (1-31) or zero-padded string (01-31)
   */
  static getDay(date: Date | string, startByZero: boolean = true): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const day = dateObj.getDate().toString();
    return startByZero ? day.padStart(2, '0') : day;
  }

  /**
   * [Split] Get month from a date
   * @param date - Date object or date string to extract month from
   * @param startByZero - If true, returns zero-padded string (01-12), otherwise returns non-zero-padded string (1-12)
   * @returns Month as non-zero-padded string (1-12) or zero-padded string (01-12)
   */
  static getMonth(date: Date | string, startByZero: boolean = true): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const month = (dateObj.getMonth() + 1).toString(); // getMonth() returns 0-11, so add 1 for 1-12
    return startByZero ? month.padStart(2, '0') : month;
  }

  /**
   * [Split] Get year from a date
   * @param date - Date object or date string to extract year from
   * @returns Year as a string (e.g., "2024")
   */
  static getYear(date: Date | string): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.getFullYear().toString();
  }

  /**
   * [Calculate] Add days to a date
   * @param date - Base date
   * @param days - Number of days to add
   * @returns New date with days added
   */
  static addDays(date: Date | string, days: number): Date {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return addDays(dateObj, days);
  }

  /**
   * [Calculate] Add months to a date
   * @param date - Base date
   * @param months - Number of months to add
   * @returns New date with months added
   */
  static addMonths(date: Date | string, months: number): Date {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return addMonths(dateObj, months);
  }

  /**
   * [Calculate] Add years to a date
   * @param date - Base date
   * @param years - Number of years to add
   * @returns New date with years added
   */
  static addYears(date: Date | string, years: number): Date {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return addYears(dateObj, years);
  }

  /**
   * [Compare] Get the difference in days between two dates
   * @param startDate - Start date
   * @param endDate - End date
   * @returns Number of days difference
   */
  static getDaysDifference(
    startDate: Date | string,
    endDate: Date | string
  ): number {
    const start =
      typeof startDate === 'string' ? new Date(startDate) : startDate;
    const end = typeof endDate === 'string' ? new Date(endDate) : endDate;
    return differenceInDays(end, start);
  }

  /**
   * [Compare] Get the difference in months between two dates
   * @param startDate - Start date
   * @param endDate - End date
   * @returns Number of months difference
   */
  static getMonthsDifference(
    startDate: Date | string,
    endDate: Date | string
  ): number {
    const start =
      typeof startDate === 'string' ? new Date(startDate) : startDate;
    const end = typeof endDate === 'string' ? new Date(endDate) : endDate;
    return differenceInMonths(end, start);
  }

  /**
   * [Compare] Get the difference in years between two dates
   * @param startDate - Start date
   * @param endDate - End date
   * @returns Number of years difference
   */
  static getYearsDifference(
    startDate: Date | string,
    endDate: Date | string
  ): number {
    const start =
      typeof startDate === 'string' ? new Date(startDate) : startDate;
    const end = typeof endDate === 'string' ? new Date(endDate) : endDate;
    return differenceInYears(end, start);
  }

  /**
   * [Start-End] Get start of day (00:00:00)
   * @param date - Date to get start of day
   * @returns Start of day
   */
  static getStartOfDay(date: Date | string = new Date()): Date {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return startOfDay(dateObj);
  }

  /**
   * [Start-End] Get end of day (23:59:59)
   * @param date - Date to get end of day
   * @returns End of day
   */
  static getEndOfDay(date: Date | string = new Date()): Date {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return endOfDay(dateObj);
  }

  /**
   * [Start-End] Get start of month
   * @param date - Date to get start of month
   * @returns Start of month
   */
  static getStartOfMonth(date: Date | string = new Date()): Date {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return startOfMonth(dateObj);
  }

  /**
   * [Start-End] Get end of month
   * @param date - Date to get end of month
   * @returns End of month
   */
  static getEndOfMonth(date: Date | string = new Date()): Date {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return endOfMonth(dateObj);
  }

  /**
   * [Validate] Check if a date is valid
   * @param date - Date to validate
   * @returns True if date is valid
   */
  static isValid(date: Date | string): boolean {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return isValid(dateObj);
  }

  /**
   * [Validate] Check if first date is before second date
   * @param date1 - First date
   * @param date2 - Second date
   * @returns True if date1 is before date2
   */
  static isBefore(date1: Date | string, date2: Date | string): boolean {
    const d1 = typeof date1 === 'string' ? new Date(date1) : date1;
    const d2 = typeof date2 === 'string' ? new Date(date2) : date2;
    return isBefore(d1, d2);
  }

  /**
   * [Validate] Check if first date is after second date
   * @param date1 - First date
   * @param date2 - Second date
   * @returns True if date1 is after date2
   */
  static isAfter(date1: Date | string, date2: Date | string): boolean {
    const d1 = typeof date1 === 'string' ? new Date(date1) : date1;
    const d2 = typeof date2 === 'string' ? new Date(date2) : date2;
    return isAfter(d1, d2);
  }

  /**
   * [Validate] Check if two dates are the same day
   * @param date1 - First date
   * @param date2 - Second date
   * @returns True if dates are the same day
   */
  static isSameDay(date1: Date | string, date2: Date | string): boolean {
    const d1 = typeof date1 === 'string' ? new Date(date1) : date1;
    const d2 = typeof date2 === 'string' ? new Date(date2) : date2;
    return isSameDay(d1, d2);
  }
}
