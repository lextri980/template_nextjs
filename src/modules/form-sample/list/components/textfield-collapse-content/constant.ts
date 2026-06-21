import { TTextfieldCollapseForm } from '../../types';

export const TEXTFIELD_COLLAPSE_CONTENT_FORM =
  'textfield-collapse-content-form' as const;

export const TEXTFIELD_COLLAPSE_FORM_DEFAULT_VALUE: TTextfieldCollapseForm = {
  baseTextfield: '',
  password: '',
  errorTextfield: '',
};
