import { Control } from 'react-hook-form';
import { TFormInput } from '../../definition';

// [Type] RadioCollapse component props
export type TRadioCollapseProps = {
  // React Hook Form control object
  control: Control<TFormInput>;
};

// [Const] Base radio group options
export const BASE_RADIO_OPTIONS = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];

// [Const] Base radio group options
export const DISABLED_RADIO_OPTIONS = [
  { label: 'Male', value: 'male', disabled: true },
  { label: 'Female', value: 'female', disabled: true },
  { label: 'Other', value: 'other' },
];
