'use client';
import styles from './style.module.scss';

export default function Loading() {
  const loadingState = false;

  // [Condition] If loading state is false, return empty component
  if (!loadingState) return <></>;

  //! [JSX Section]
  return (
    <div className={styles['loading-container']}>
      <span className={styles['loader']}></span>
    </div>
  );
}
