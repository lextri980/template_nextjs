// [Type] Combined form values type
export type TFormInput = TTextfieldCollapseFormValues &
  TSelectCollapseFormValues &
  TRadioCollapseFormValues;

// [Type] Textfield collapse form values
export type TTextfieldCollapseFormValues = {
  baseTextfield: string;
  passwordTextfield: string;
  disabledTextfield: string;
  errorTextfield: string;
  textarea: string;
};

// [Type] Select collapse form values
export type TSelectCollapseFormValues = {
  baseSelect: string | null;
  disabledSelect: string | null;
  multipleSelect: string[];
};

// [Type] Radio collapse form values
export type TRadioCollapseFormValues = {
  baseRadio: string | null;
  disabledRadio: string | null;
  disabledOptionsRadio: string | null;
  errorRadio: string | null;
};

// [Const] Default values for the form fields
export const DEFAULT_VALUES = {
  baseTextfield: '',
  passwordTextfield: 'This is password field',
  disabledTextfield: 'This is disabled field',
  errorTextfield: 'This is error field',
  textarea: 'This is textarea field',
  baseRadio: 'male',
  disabledRadio: 'male',
  disabledOptionsRadio: 'male',
  errorRadio: null,
};
