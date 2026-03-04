import { TextFieldProps } from '@mui/material';
import { FieldPath, FieldValues } from 'react-hook-form';
import { TFieldState } from '../field/definition';

// [Type] NumberField Props
export type TNumberFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<TextFieldProps, 'error'> &
  TFieldState<TFieldValues, TName> & {
    /** Type of the number field */
    type?: 'number' | 'currency';
    /** Error message */
    error?: string;
  };

// [Const] Action keys that are allowed in the number field
export const ACTION_KEYS = {
  BACKSPACE: 'Backspace',
  DELETE: 'Delete',
  TAB: 'Tab',
  ESCAPE: 'Escape',
  ENTER: 'Enter',
};

// [Const] Control keys that are allowed in the number field
export const CONTROL_KEYS = {
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
};
