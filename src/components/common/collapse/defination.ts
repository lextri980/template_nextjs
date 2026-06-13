// [Type] Props for Collapse component
export type TCollapseProps = {
  // Title of the collapse section
  title: string | React.ReactNode;
  // Whether the collapse is expanded by default
  defaultExpanded?: boolean;
  // Children element
  children: React.ReactNode;
};
