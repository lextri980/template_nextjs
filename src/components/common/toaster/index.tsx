import { XClose } from '@untitledui/icons';
import { toast as sonnerToast } from 'sonner';
import './style.scss';
import { TToasterProps } from './type';

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
