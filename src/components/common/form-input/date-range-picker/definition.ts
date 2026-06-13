import type { DatePickerProps } from 'react-datepicker';
import type { FieldPath, FieldValues } from 'react-hook-form';
import type { TFieldState } from '../field/definition';

/**
 * [Type] DateRangePicker component props
 */
export type TDateRangePickerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<
  DatePickerProps,
  | 'onChange'
  | 'selected'
  | 'selectsRange'
  | 'selectsMultiple'
  | 'showMonthYearDropdown'
  | 'formatMultipleDates'
> &
  TFieldState<TFieldValues, TName> & {
    /** Whether the date range picker is disabled */
    disabled?: boolean;
    /** Error message for the date range picker */
    error?: string;
    /** Date format string (e.g., 'dd/MM/yyyy') */
    format?: string;
    /** Label for the date range picker */
    label?: string;
    /** Placeholder text for the start date input */
    placeholderStart?: string;
    /** Placeholder text for the end date input */
    placeholderEnd?: string;
    /** Whether the date range picker is required */
    required?: boolean;
  };
