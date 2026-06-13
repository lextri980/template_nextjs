/**
 * [Type] Label component props
 */
export type TLabelProps = {
  /** Custom class for the label component */
  className?: string;
  /** Whether the label is disabled */
  disabled?: boolean;
  /** Error message for the label */
  error?: string;
  /** Whether the label is required */
  required?: boolean;
  /** [Slot] Children for the Label Component */
  children: React.ReactNode | string;
};
