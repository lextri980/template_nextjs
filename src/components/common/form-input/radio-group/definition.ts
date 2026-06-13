import type { RadioGroupProps, RadioProps } from '@mui/material';
import type { FieldPath, FieldValues } from 'react-hook-form';
import type { TFieldState } from '../field/definition';

// [Type] RadioGroup Component Props
export type TRadioGroupProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = RadioGroupProps &
  TFieldState<TFieldValues, TName> & {
    // Option list for radio group
    options: TRadioOption[];
    // Label for the radio group
    label?: string;
    // Props for individual radio buttons
    radioProps?: RadioProps;
    // Whether the radio group is disabled
    disabled?: boolean;
    // Error message for the radio group
    error?: string;
    // Whether the radio group is required
    required?: boolean;
  };

// [Type] Radio option
export type TRadioOption = {
  // Label for the radio option
  label: string;
  // Value for the radio option
  value: string;
  // Whether the radio option is disabled
  disabled?: boolean;
};
