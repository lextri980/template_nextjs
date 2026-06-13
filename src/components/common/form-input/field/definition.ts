import type React from 'react';
import type {
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  PathValue,
  UseFormStateReturn,
} from 'react-hook-form';

// [Type] Field Component Props
export type TFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  // Control object from react-hook-form
  control: Control<TFieldValues>;
  // Name of the field
  name: TName;
  // Label for the field
  label?: string;
  // Default value for the field
  defaultValue?: PathValue<TFieldValues, TName>;
  // Whether the field is required
  required?: boolean;
  // Children for Field Component
  children: React.ReactElement | TRenderFieldFunction<TFieldValues, TName>;
};

// [Type] Function to render field
export type TRenderFieldFunction<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = (form: TFieldState<TFieldValues, TName>) => React.ReactElement;

// [Type] Field state passed to render function
export type TFieldState<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  // Field props from react-hook-form Controller
  field?: ControllerRenderProps<TFieldValues, TName>;
  // Field state from react-hook-form Controller
  fieldState?: Omit<ControllerFieldState, 'error'>;
  // Form state from react-hook-form
  formState?: UseFormStateReturn<TFieldValues>;
};
