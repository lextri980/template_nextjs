import { Button as MuiButton } from '@mui/material';
import { TButtonProps } from './definition';
import styles from './style.module.scss';

export default function Button(props: TButtonProps) {
  const { children, ...rest } = props;

  return (
    <div className={styles['button-container']}>
      <MuiButton {...rest}>{children}</MuiButton>
    </div>
  );
}
