import { Control } from 'react-hook-form';
import { TFormInput } from '../../definition';

// [Type] SelectCollapse component props
export type TSelectCollapseProps = {
  // React Hook Form control object
  control: Control<TFormInput>;
};

// [Const] Options for the base select field
export const BASE_SELECT_OPTIONS = [
  { id: 1, label: 'The Shawshank Redemption' },
  { id: 2, label: 'The Godfather' },
  { id: 3, label: 'The Godfather: Part II' },
  { id: 4, label: 'The Dark Knight' },
  { id: 5, label: '12 Angry Men' },
  { id: 6, label: "Schindler's List" },
];
