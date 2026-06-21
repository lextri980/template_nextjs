import { COLOR_VARIANTS } from './../constants/theme';

export type TColorVariant =
  (typeof COLOR_VARIANTS)[keyof typeof COLOR_VARIANTS];
