import type { TextFieldProps } from '@mui/material/TextField';
import type { FieldPath, FieldValues } from 'react-hook-form';
import type { TFieldState } from '../field/type';

// [Type] TextField Component Props
export type TTextFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<TextFieldProps, 'error'> &
  TFieldState<TFieldValues, TName> & {
    // Type of the text field
    type?: 'text' | 'password';
    // Error message
    error?: string;
  };
