import { XClose } from '@untitledui/icons';
import { toast as sonnerToast } from 'sonner';
import { TToasterProps } from './defintion';
import './style.scss';

export default function Toaster(props: TToasterProps) {
  // [Props] Destructuring props
  const { message = 'This is a toast' } = props;

  //! [JSX Section]
  return (
    <div className='toaster-container'>
      <div className='message-wrapper'>{message}</div>
      <XClose className='close-icon' onClick={() => sonnerToast.dismiss()} />
    </div>
  );
}
