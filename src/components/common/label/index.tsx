import clsx from 'clsx';
import type { TLabelProps } from './definition';
import styles from './style.module.scss';

export default function Label(props: TLabelProps) {
  // [Props] Destructuring props
  const { required = false, disabled = false, error, children } = props;

  //! [JSX Section]
  return (
    <div className={styles['label-container']}>
      <span
        className={clsx(styles['label-text'], {
          [styles['label-text-error']]: error,
          [styles['label-text-disabled']]: disabled,
        })}>
        {children}
      </span>
      {required && <span className={styles['asterisk']}>*</span>}
    </div>
  );
}
