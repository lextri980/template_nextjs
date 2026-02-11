import styles from './style.module.scss';
import type { TLabelProps } from './type';

export default function Label(props: TLabelProps) {
  // [Props] Destructuring props
  const { required = false, children } = props;

  //! [JSX Section]
  return (
    <div className={styles['label-container']}>
      <span className={styles['label-text']}>{children}</span>
      {required && <span className={styles['asterisk']}>*</span>}
    </div>
  );
}
