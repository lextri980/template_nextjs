import styles from '@/styles/layouts/auth.module.scss';
import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  //! [JSX Section]
  return <div className={styles['auth-layout-container']}>{children}</div>;
}
