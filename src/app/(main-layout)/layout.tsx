import styles from '@/styles/layouts/main.module.scss';
import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return <div className={styles['main-layout-container']}>{children}</div>;
}
