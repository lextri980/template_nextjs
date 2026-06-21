import { ReactNode } from 'react';
import { InputProps } from '@heroui/react';
import { FieldPath, FieldValues } from 'react-hook-form';
import { TFieldState } from '../field/type';
import { TEXTFIELD_TYPE } from './constant';

export type TTextfieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> =
  // https://heroui.com/en/docs/react/components/input#input-props
  InputProps &
    TFieldState<TFieldValues, TName> & {
      // Label for textfield
      label?: string;
      // Type of the text field
      type?: TTextfieldType;
      // Error message
      error?: string;
      // [Slot] Render prefix section
      renderPrefix?: () => ReactNode | string;
      // [Slot] Render postfix section
      renderSuffix?: () => ReactNode | string;
    };

export type TTextfieldType =
  (typeof TEXTFIELD_TYPE)[keyof typeof TEXTFIELD_TYPE];
