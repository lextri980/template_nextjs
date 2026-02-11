import { Label } from '@/components/common';
import MuiTextField from '@mui/material/TextField';
import styles from './style.module.scss';
import type { TTextFieldProps } from './type';

export default function TextField(props: TTextFieldProps) {
  // [Props] Destructuring props
  const { label, error, type, slotProps, field, required, ...rest } = props;

  //! [JSX Section]
  return (
    <div className={styles['textfield-container']}>
      <Label required={required}>{label}</Label>
      <MuiTextField
        {...field}
        {...rest}
        id={field?.name}
        variant='outlined'
        type={type ?? 'text'}
        label=''
        error={!!error}
        autoComplete='off'
        slotProps={{
          ...slotProps,
          root: { className: styles['textfield-root'] },
          input: { className: styles['textfield-input-wrapper'] },
          inputLabel: { className: styles['textfield-label'] },
          htmlInput: { className: styles['textfield-input'] },
          formHelperText: { className: styles['textfield-helper-text'] },
        }}
      />
      {error && <small className={styles['error-text']}>{error}</small>}
    </div>
  );
}
