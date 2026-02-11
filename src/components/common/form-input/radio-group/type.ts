import type { RadioGroupProps, RadioProps } from '@mui/material';
import type { FieldPath, FieldValues } from 'react-hook-form';
import type { TFieldState } from '../field/type';

// [Type] RadioGroup Component Props
export type TRadioGroupProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = RadioGroupProps &
  TFieldState<TFieldValues, TName> & {
    // Option list for radio group
    options: TRadioOption[];
    // Props for individual radio buttons
    radioProps?: RadioProps;
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
