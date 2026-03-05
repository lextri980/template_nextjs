import { Check } from '@untitledui/icons';
import clsx from 'clsx';
import type { TCheckboxCheckIconProps } from './definition';
import styles from './style.module.scss';

export default function CheckboxCheckIcon(props: TCheckboxCheckIconProps) {
  // [Props] Destructuring props
  const { checked, disabled } = props;

  //! [JSX Section]
  return (
    <span
      className={clsx(styles['checkbox-check-icon-container'], {
        [styles['checked']]: checked,
        [styles['disabled']]: disabled,
      })}>
      {checked && <Check className={styles['check-icon']} />}
    </span>
  );
}
