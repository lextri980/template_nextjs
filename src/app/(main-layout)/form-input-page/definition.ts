/**
 * [Type] Combined form values type
 */
export type TFormInput = TTextfieldCollapseFormValues &
  TNumberFieldCollapseFormValues &
  TSelectCollapseFormValues &
  TRadioCollapseFormValues &
  TCheckboxCollapseFormValues &
  TDatePickerCollapseFormValues;

/**
 * [Type] Textfield collapse form values
 */
export type TTextfieldCollapseFormValues = {
  baseTextfield: string;
  passwordTextfield: string;
  disabledTextfield: string;
  errorTextfield: string;
  textarea: string;
};

/**
 * [Type] Number field collapse form values
 */
export type TNumberFieldCollapseFormValues = {
  baseNumberField: string;
  baseSeparatorNumberField: string;
  disabledNumberField: string;
  errorNumberField: string;
};

/**
 * [Type] Select collapse form values
 */
export type TSelectCollapseFormValues = {
  baseSelect: string | null;
  disabledSelect: string | null;
  errorSelect: string | null;
  multiSelect: string[];
  disabledMultiSelect: string[];
  errorMultiSelect: string[];
};

/**
 * [Type] Radio collapse form values
 */
export type TRadioCollapseFormValues = {
  baseRadio: string | null;
  disabledRadio: string | null;
  disabledOptionsRadio: string | null;
  errorRadio: string | null;
};

/**
 * [Type] Checkbox collapse form values
 */
export type TCheckboxCollapseFormValues = {
  baseCheckbox: string[];
  disabledCheckbox: string[];
  disabledOptionCheckbox: string[];
  errorCheckbox: string[];
};

/**
 * [Type] DatePicker collapse form values
 */
export type TDatePickerCollapseFormValues = {
  baseDatePicker: Date | null;
  multiDatePicker: Date[] | null;
  rangeDatePicker: [Date | null, Date | null] | null;
  disabledDatePicker: Date | null;
  errorDatePicker: Date | null;
};

/**
 * [Const] Default values for the form inputs
 */
export const DEFAULT_VALUES = {
  /** Textfield */
  baseTextfield: '',
  passwordTextfield: 'This is password field',
  disabledTextfield: 'This is disabled field',
  errorTextfield: 'This is error field',
  textarea: 'This is textarea field',
  /** Number field */
  baseNumberField: '123456789',
  baseSeparatorNumberField: '123456789.99',
  disabledNumberField: '123456789.99',
  errorNumberField: '123456789',
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
  /** Checkbox */
  baseCheckbox: [],
  disabledCheckbox: [],
  disabledOptionCheckbox: [],
  errorCheckbox: [],
  /** DatePicker */
  baseDatePicker: null,
  multiDatePicker: null,
  rangeDatePicker: null,
  disabledDatePicker: null,
  errorDatePicker: null,
};
