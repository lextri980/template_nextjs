import { COLOR_VARIANTS, useColorVariant } from '@/modules/common';
import { Button as HeroButton } from '@heroui/react';
import clsx from 'clsx';
import { TButton } from './type';

export function Button(props: TButton) {
  const {
    color = COLOR_VARIANTS.PRIMARY,
    className,
    children,
    ...rest
  } = props;
  const { bgColorVariant } = useColorVariant(color);

  return (
    <HeroButton
      className={clsx('rounded-sm', bgColorVariant, className)}
      {...rest}>
      {children}
    </HeroButton>
  );
}
