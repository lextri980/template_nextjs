import { Menu01, Moon01, Triangle } from '@untitledui/icons';

export default function Header() {
  return (
    <div className='bg-light mb-4 flex h-12.5 items-center justify-between px-5 py-2 shadow-sm'>
      <span className='flex gap-2 font-semibold'>
        <Triangle className='size-5' />
        Next Template
      </span>
      <div className='flex items-center gap-4'>
        <Moon01 className='size-4 cursor-pointer' />
        <Menu01 className='size-5 cursor-pointer' />
      </div>
    </div>
  );
}
