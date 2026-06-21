export type TLabelProps = {
  // Additional className
  className?: string;
  // Error message
  error?: string;
  // Whether the label is required
  required?: boolean;
  // Children for the Label Component
  children: React.ReactNode | string;
};
