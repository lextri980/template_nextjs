import { Beaker02, Lock01 } from '@untitledui/icons';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen p-24 gap-[48px]'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <Image
          className='dark:invert'
          src='/svg/next.svg'
          alt='Next.js logo'
          width={180}
          height={38}
          priority
        />
        <ol className=' list-inside list-decimal text-sm/6 text-center sm:text-left'>
          <li className='mb-2 tracking-[-.01em]'>
            Get started by editing{' '}
            <code className='bg-black/[.05] dark:bg-white/[.06] font-semibold px-1 py-0.5 rounded'>
              src/app/page.tsx
            </code>
            .
          </li>
          <li className='tracking-[-.01em]'>
            Save and see your changes instantly.
          </li>
        </ol>
      </main>
      <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='/form-input-page'
          target='_blank'
          rel='noopener noreferrer'>
          <Beaker02 width={16} height={16} />
          Form Input Page
        </a>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='/login'
          target='_blank'
          rel='noopener noreferrer'>
          <Lock01 width={16} height={16} />
          Login Page
        </a>
      </footer>
    </div>
  );
}
