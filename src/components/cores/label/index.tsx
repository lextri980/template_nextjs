import { clsx } from 'clsx';
import type { TLabelProps } from './type';

export default function Label(props: TLabelProps) {
  const { className = '', error, required = false, children } = props;

  return (
    <div className={clsx('c_label-container', 'flex gap-1', className)}>
      <span
        className={clsx(
          'text-sm font-semibold',
          error ? 'text-error' : 'text-foreground'
        )}>
        {children}
      </span>
      {required && <span className='text-error'>*</span>}
    </div>
  );
}
