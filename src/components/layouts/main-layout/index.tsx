import React from 'react';
import { Header } from '@/components/composites';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col'>
      <Header />
      {children}
    </div>
  );
}
