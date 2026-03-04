// [Type] Combined form values type
export type TFormInput = TTextfieldCollapseFormValues &
  TNumberFieldCollapseFormValues &
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

// [Type] Number field collapse form values
export type TNumberFieldCollapseFormValues = {
  baseNumberField: string;
};

// [Type] Select collapse form values
export type TSelectCollapseFormValues = {
  baseSelect: string | null;
  disabledSelect: string | null;
  errorSelect: string | null;
  multiSelect: string[];
  disabledMultiSelect: string[];
  errorMultiSelect: string[];
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
  /** Textfield */
  baseTextfield: '',
  passwordTextfield: 'This is password field',
  disabledTextfield: 'This is disabled field',
  errorTextfield: 'This is error field',
  textarea: 'This is textarea field',
  /** Number field */
  baseNumberField: '',
  /** Select */
  baseSelect: null,
  disabledSelect: null,
  errorSelect: null,
  multiSelect: [],
  disabledMultiSelect: [],
  errorMultiSelect: [],
  /** Radio */
  baseRadio: 'male',
  disabledRadio: 'male',
  disabledOptionsRadio: 'male',
  errorRadio: null,
};

