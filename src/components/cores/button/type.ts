import { TColorVariant } from '@/modules/common';
import { ButtonProps } from '@heroui/react';

export type TButton =
  // https://heroui.com/en/docs/react/components/button#button-props
  ButtonProps & {
    // Color variant of the button
    color?: TColorVariant;
  };
