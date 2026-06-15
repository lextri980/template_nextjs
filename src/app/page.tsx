import Image from 'next/image';
import { ROUTER } from '@/routers';
import { Brackets, LockKeyholeSquare } from '@untitledui/icons';

export default function Home() {
  const BUTTON_MENU = [
    {
      url: ROUTER.FORM_SAMPLE,
      icon: <Brackets className='size-5' />,
      title: 'Form Sample',
    },
    {
      url: ROUTER.LOGIN,
      icon: <LockKeyholeSquare className='size-5' />,
      title: 'Login Page',
    },
  ];

  return (
    <div className='flex flex-1 flex-col items-center justify-center'>
      <main className='flex w-full flex-1 flex-col items-center justify-center gap-4 bg-white px-16 py-32'>
        <Image
          src='/svg/next.svg'
          alt='Next.js logo'
          width={100}
          height={20}
          priority
        />
        <p className='text-muted-foreground text-lg'>
          Enter these router to test our page samples, and feel free to explore
          more!
        </p>
        <div className='flex gap-4 font-medium'>
          {BUTTON_MENU.map((item, index) => (
            <a
              key={index}
              className='bg-foreground text-background flex h-12 w-fit items-center justify-center gap-2 rounded-md px-3 transition-colors hover:bg-[#383838]'
              href={item.url}>
              {item.icon}
              {item.title}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
