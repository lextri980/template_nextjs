import { Label } from '@/components/common';
import MuiTextField from '@mui/material/TextField';
import type { TTextFieldProps } from './definition';
import styles from './style.module.scss';

export default function TextField(props: TTextFieldProps) {
  // [Props] Destructuring props
  const { label, error, type, slotProps, field, required, disabled, ...rest } =
    props;

  //! [JSX Section]
  return (
    <div className={styles['textfield-container']}>
      <Label disabled={disabled} error={error} required={required}>
        {label}
      </Label>
      <MuiTextField
        {...field}
        {...rest}
        id={field?.name}
        variant='outlined'
        type={type ?? 'text'}
        label=''
        error={!!error}
        autoComplete='off'
        disabled={disabled}
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
