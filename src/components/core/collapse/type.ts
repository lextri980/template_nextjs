import type { ElementType, ReactNode } from 'react';
import {
  AccordionBodyProps,
  AccordionIndicatorProps,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionProps,
  AccordionTriggerProps,
} from '@heroui/react';

export type TCollapseProps = {
  // Items of collapse
  items: TCollapseItem[];
  // Uppercase title if true
  uppercaseTitle?: boolean;
  // Accordion component props
  accordionProps?: AccordionProps;
  // Accordion.Item props
  accordionItemProps?: AccordionItemProps;
  // Accordion.Trigger props
  accordionTriggerProps?: AccordionTriggerProps;
  // Accordion.Panel props
  accordionPanelProps?: AccordionPanelProps;
  // Accordion.Indicator props
  accordionIndicatorProps?: AccordionIndicatorProps;
  // Accordion.Body props
  accordionBodyProps?: AccordionBodyProps;
};

export type TCollapseItem = {
  // Title in header
  title: string | ReactNode;
  // Content in body
  content: string | ReactNode;
  // Icon displaying in the left of title
  icon?: ElementType<{ className: string }> | null;
};
