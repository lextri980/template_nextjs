import { useMemo } from 'react';
import { BG_VARIANTS, COLOR_VARIANTS, TEXT_COLOR_VARIANTS } from '../constants';
import { TColorVariant } from '../types';

export function useColorVariant(color: TColorVariant) {
  const colorVariant = useMemo(() => {
    return {
      [COLOR_VARIANTS.PRIMARY]: COLOR_VARIANTS.PRIMARY,
      [COLOR_VARIANTS.SECONDARY]: COLOR_VARIANTS.SECONDARY,
      [COLOR_VARIANTS.SUCCESS]: COLOR_VARIANTS.SUCCESS,
      [COLOR_VARIANTS.INFO]: COLOR_VARIANTS.INFO,
      [COLOR_VARIANTS.WARNING]: COLOR_VARIANTS.WARNING,
      [COLOR_VARIANTS.ERROR]: COLOR_VARIANTS.ERROR,
    }[color];
  }, [color]);

  const bgColorVariant = useMemo(() => {
    return {
      [COLOR_VARIANTS.PRIMARY]: BG_VARIANTS.PRIMARY,
      [COLOR_VARIANTS.SECONDARY]: BG_VARIANTS.SECONDARY,
      [COLOR_VARIANTS.SUCCESS]: BG_VARIANTS.SUCCESS,
      [COLOR_VARIANTS.INFO]: BG_VARIANTS.INFO,
      [COLOR_VARIANTS.WARNING]: BG_VARIANTS.WARNING,
      [COLOR_VARIANTS.ERROR]: BG_VARIANTS.ERROR,
    }[color];
  }, [color]);

  const textColorVariant = useMemo(() => {
    return {
      [COLOR_VARIANTS.PRIMARY]: TEXT_COLOR_VARIANTS.PRIMARY,
      [COLOR_VARIANTS.SECONDARY]: TEXT_COLOR_VARIANTS.SECONDARY,
      [COLOR_VARIANTS.SUCCESS]: TEXT_COLOR_VARIANTS.SUCCESS,
      [COLOR_VARIANTS.INFO]: TEXT_COLOR_VARIANTS.INFO,
      [COLOR_VARIANTS.WARNING]: TEXT_COLOR_VARIANTS.WARNING,
      [COLOR_VARIANTS.ERROR]: TEXT_COLOR_VARIANTS.ERROR,
    }[color];
  }, [color]);

  return {
    colorVariant,
    bgColorVariant,
    textColorVariant,
  };
}
