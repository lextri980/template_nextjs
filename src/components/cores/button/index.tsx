import { useMemo } from 'react';
import { BG_VARIANTS, COLOR_VARIANTS } from '@/modules/common';
import { Button as HeroButton } from '@heroui/react';
import clsx from 'clsx';
import { TButton } from './type';

export default function Button(props: TButton) {
  const {
    color = COLOR_VARIANTS.PRIMARY,
    className,
    children,
    ...rest
  } = props;

  const colorVariant = useMemo(() => {
    return (
      {
        [COLOR_VARIANTS.PRIMARY]: BG_VARIANTS.PRIMARY,
        [COLOR_VARIANTS.SECONDARY]: BG_VARIANTS.SECONDARY,
        [COLOR_VARIANTS.SUCCESS]: BG_VARIANTS.SUCCESS,
        [COLOR_VARIANTS.INFO]: BG_VARIANTS.INFO,
        [COLOR_VARIANTS.WARNING]: BG_VARIANTS.WARNING,
        [COLOR_VARIANTS.ERROR]: BG_VARIANTS.ERROR,
      }[color] ?? BG_VARIANTS.PRIMARY
    );
  }, [color]);

  return (
    <HeroButton
      className={clsx('rounded-sm', colorVariant, className)}
      {...rest}>
      {children}
    </HeroButton>
  );
}
