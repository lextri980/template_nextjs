import clsx from 'clsx';
import styles from './style.module.scss';
import type { TRadioCheckIconProps } from './type';

export default function RadioCheckIcon(props: TRadioCheckIconProps) {
  const { checked, disabled } = props;

  return (
    <span
      className={clsx(styles['radio-check-icon-container'], {
        [styles['checked']]: checked,
        [styles['disabled']]: disabled,
      })}></span>
  );
}
