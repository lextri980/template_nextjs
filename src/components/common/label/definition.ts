// [Type] Label Component Props
export type TLabelProps = {
  // Whether the label is required
  required?: boolean;
  // Whether the label is disabled
  disabled?: boolean;
  // Error message for the label
  error?: string;
  // Children for the Label Component
  children: React.ReactNode | string;
};
