import type { DatePickerProps } from 'react-datepicker';
import type { FieldPath, FieldValues } from 'react-hook-form';
import type { TFieldState } from '../field/definition';

/**
 * [Type] DatePicker component props
 */
export type TDatePickerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<DatePickerProps, 'onChange' | 'selected'> &
  TFieldState<TFieldValues, TName> & {
    /** Date format string (e.g., 'dd/MM/yyyy') */
    format?: string;
    /** Placeholder text for the date picker input */
    placeholder?: string;
    /** Label for the date picker */
    label?: string;
    /** Whether the date picker is disabled */
    disabled?: boolean;
    /** Error message for the date picker */
    error?: string;
    /** Whether the date picker is required */
    required?: boolean;
  };
