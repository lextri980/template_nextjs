import { Control } from 'react-hook-form';
import { TFormInput } from '../../definition';

/**
 * [Type] Checkbox collapse component props
 */
export type TCheckboxCollapseProps = {
  /** React Hook Form control object */
  control: Control<TFormInput>;
};

/**
 * [Const] Base options for the checkbox component
 */
export const BASE_CHECKBOX_OPTIONS = [
  { value: 'cat', label: 'Cat' },
  { value: 'dog', label: 'Dog' },
  { value: 'rabbit', label: 'Rabbit' },
];

/**
 * [Const] Options with some disabled for the checkbox component
 */
export const DISABLED_OPTION_CHECKBOX_OPTIONS = [
  { value: 'cat', label: 'Cat' },
  { value: 'dog', label: 'Dog', disabled: true },
  { value: 'rabbit', label: 'Rabbit' },
];
