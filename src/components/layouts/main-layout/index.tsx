import React from 'react';
import { Header } from '@/components/composites';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col'>
      <Header />
      {children}
    </div>
  );
}
