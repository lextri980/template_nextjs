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
 * Date format constants
 */
export const DATE_FORMATS = {
  FULL: 'yyyy/MM/dd HH:mm:ss',
  DATE_ONLY: 'dd/MM/yyyy',
  DATE_REVERSE_ONLY: 'yyyy/MM/dd',
  TIME_ONLY: 'HH:mm:ss',
} as const;

/**
 * Date utility types
 */
export type TDateFormat = (typeof DATE_FORMATS)[keyof typeof DATE_FORMATS];

/**
 * Date utility handler
 */
export default class DateUtil {
  /**
   * Format a date to a specific format
   * @param {Date | string} date - Date to format
   * @param {TDateFormat} dateFormat - Format string (default: DATE_ONLY)
   * @returns {string} Formatted date string
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
   * @param {string} dateString - Date string to parse
   * @param {TDateFormat} dateFormat - Format string to match
   * @returns {Date} Parsed date
   */
  static parse(
    dateString: string,
    dateFormat: TDateFormat = DATE_FORMATS.DATE_ONLY
  ): Date {
    return parse(dateString, dateFormat, new Date());
  }

  /**
   * Check if a date is valid
   * @param {Date | string} date - Date to validate
   * @returns {boolean} True if date is valid
   */
  static isValid(date: Date | string): boolean {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return isValid(dateObj);
  }

  /**
   * Get the difference in days between two dates
   * @param {Date | string} startDate - Start date
   * @param {Date | string} endDate - End date
   * @returns {number} Number of days difference
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
   * Get the difference in months between two dates
   * @param {Date | string} startDate - Start date
   * @param {Date | string} endDate - End date
   * @returns {number} Number of months difference
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
   * Get the difference in years between two dates
   * @param {Date | string} startDate - Start date
   * @param {Date | string} endDate - End date
   * @returns {number} Number of years difference
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
   * Add days to a date
   * @param {Date | string} date - Base date
   * @param {number} days - Number of days to add
   * @returns {Date} New date with days added
   */
  static addDays(date: Date | string, days: number): Date {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return addDays(dateObj, days);
  }

  /**
   * Add months to a date
   * @param {Date | string} date - Base date
   * @param {number} months - Number of months to add
   * @returns {Date} New date with months added
   */
  static addMonths(date: Date | string, months: number): Date {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return addMonths(dateObj, months);
  }

  /**
   * Add years to a date
   * @param {Date | string} date - Base date
   * @param {number} years - Number of years to add
   * @returns {Date} New date with years added
   */
  static addYears(date: Date | string, years: number): Date {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return addYears(dateObj, years);
  }

  /**
   * Get start of day (00:00:00)
   * @param {Date | string} date - Date to get start of day
   * @returns {Date} Start of day
   */
  static getStartOfDay(date: Date | string = new Date()): Date {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return startOfDay(dateObj);
  }

  /**
   * Get end of day (23:59:59)
   * @param {Date | string} date - Date to get end of day
   * @returns {Date} End of day
   */
  static getEndOfDay(date: Date | string = new Date()): Date {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return endOfDay(dateObj);
  }

  /**
   * Get start of month
   * @param {Date | string} date - Date to get start of month
   * @returns {Date} Start of month
   */
  static getStartOfMonth(date: Date | string = new Date()): Date {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return startOfMonth(dateObj);
  }

  /**
   * Get end of month
   * @param {Date | string} date - Date to get end of month
   * @returns {Date} End of month
   */
  static getEndOfMonth(date: Date | string = new Date()): Date {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return endOfMonth(dateObj);
  }

  /**
   * Check if first date is before second date
   * @param {Date | string} date1 - First date
   * @param {Date | string} date2 - Second date
   * @returns {boolean} True if date1 is before date2
   */
  static isBefore(date1: Date | string, date2: Date | string): boolean {
    const d1 = typeof date1 === 'string' ? new Date(date1) : date1;
    const d2 = typeof date2 === 'string' ? new Date(date2) : date2;
    return isBefore(d1, d2);
  }

  /**
   * Check if first date is after second date
   * @param {Date | string} date1 - First date
   * @param {Date | string} date2 - Second date
   * @returns {boolean} True if date1 is after date2
   */
  static isAfter(date1: Date | string, date2: Date | string): boolean {
    const d1 = typeof date1 === 'string' ? new Date(date1) : date1;
    const d2 = typeof date2 === 'string' ? new Date(date2) : date2;
    return isAfter(d1, d2);
  }

  /**
   * Check if two dates are the same day
   * @param {Date | string} date1 - First date
   * @param {Date | string} date2 - Second date
   * @returns {boolean} True if dates are the same day
   */
  static isSameDay(date1: Date | string, date2: Date | string): boolean {
    const d1 = typeof date1 === 'string' ? new Date(date1) : date1;
    const d2 = typeof date2 === 'string' ? new Date(date2) : date2;
    return isSameDay(d1, d2);
  }
}
