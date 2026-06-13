import { AutocompleteProps } from '@mui/material';
import { ElementType } from 'react';
import { FieldPath, FieldValues } from 'react-hook-form';
import { TFieldState } from '../field/definition';

// [Type] Select component props
export type TSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  FreeSolo extends boolean = false,
  ChipComponent extends ElementType = ElementType,
> = Omit<
  AutocompleteProps<TSelectOption, false, false, FreeSolo, ChipComponent>,
  'renderInput' | 'options' | 'disableClearable'
> &
  TFieldState<TFieldValues, TName> & {
    // Options for the select field
    options: TSelectOption[];
    // Label for the select field
    label?: string;
    // Whether the field is required
    required?: boolean;
    // Placeholder text for the select input
    placeholder?: string;
    // Whether to hide the clear icon in the select input
    hideClearIcon?: boolean;
    // Error message
    error?: string;
  };

// [Type] select options
export type TSelectOption = {
  // Main value of the select
  id: string | number;
  // Display label for the option
  label: string;
};
