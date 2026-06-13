import type { CheckboxProps, FormGroupProps } from '@mui/material';
import type { FieldPath, FieldValues } from 'react-hook-form';
import type { TFieldState } from '../field/definition';

/**
 * [Type] Checkbox component props
 */
export type TCheckboxProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<FormGroupProps, 'onChange'> &
  TFieldState<TFieldValues, TName> & {
    /** Option list for checkbox group */
    options: TCheckboxOption[];
    /** Label for the checkbox group */
    label?: string;
    /** Props for individual checkboxes */
    checkboxProps?: CheckboxProps;
    /** Whether the checkbox group is disabled */
    disabled?: boolean;
    /** Error message for the checkbox group */
    error?: string;
    /** Whether the checkbox group is required */
    required?: boolean;
  };

/**
 * [Type] Checkbox option
 */
export type TCheckboxOption = {
  /** Label for the checkbox option */
  label: string;
  /** Value for the checkbox option */
  value: string;
  /** Whether the checkbox option is disabled */
  disabled?: boolean;
};
