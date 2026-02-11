import { AutocompleteProps } from '@mui/material';
import { ElementType } from 'react';

// [Type] Select component props
export type TSelectProps<
  Value = unknown,
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false,
  ChipComponent extends ElementType = ElementType,
> = Omit<
  AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>,
  'renderInput'
> & {
  // Label for the select field
  label?: string;
  // Whether the field is required
  required?: boolean;
  // Error message
  error?: string;
};
