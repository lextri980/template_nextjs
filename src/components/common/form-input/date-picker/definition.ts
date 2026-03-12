import type { DatePickerProps } from 'react-datepicker';
import type { FieldPath, FieldValues } from 'react-hook-form';
import type { TFieldState } from '../field/definition';

/**
 * [Type] DatePicker component props
 */
export type TDatePickerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<DatePickerProps, 'onChange' | 'selected' | 'selectsMultiple'> &
  TFieldState<TFieldValues, TName> & {
    /** Whether the date picker is disabled */
    disabled?: boolean;
    /** Error message for the date picker */
    error?: string;
    /** Date format string (e.g., 'dd/MM/yyyy') */
    format?: string;
    /** Label for the date picker */
    label?: string;
    /** Whether the date picker allows selecting multiple dates */
    multiple?: boolean;
    /** Placeholder text for the date picker input */
    placeholder?: string;
    /** Whether the date picker is required */
    required?: boolean;
  };
