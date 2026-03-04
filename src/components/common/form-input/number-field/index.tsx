import { Label } from '@/components/common';
import MuiTextField from '@mui/material/TextField';
import { ChangeEvent, KeyboardEvent } from 'react';
import { ACTION_KEYS, CONTROL_KEYS, TNumberFieldProps } from './definition';
import styles from './style.module.scss';

export default function NumberField(props: TNumberFieldProps) {
  // [Props] Destructuring props
  const {
    label,
    disabled,
    error,
    type = 'currency',
    required,
    slotProps,
    field,
    ...rest
  } = props;

  const handleKeyDownNumberField = (e: KeyboardEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement;
    const currentValue = target.value;
    const cursorPosition = target.selectionStart ?? 0;

    // Allow: ACTION_KEYS (backspace, delete, tab, escape, enter)
    if (Object.values(ACTION_KEYS).includes(e.key)) {
      return;
    }
    // Allow: Ctrl/Cmd shortcuts (Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+Z)
    if (e.ctrlKey === true || e.metaKey === true) {
      return;
    }
    // Allow: navigation keys (arrow keys, home, end)
    if (Object.values(CONTROL_KEYS).includes(e.key)) {
      return;
    }
    // Allow: numbers (0-9)
    if (e.key >= '0' && e.key <= '9') {
      return;
    }
    // Allow: dot (.) only if there's no dot already
    if (e.key === '.') {
      if (currentValue.includes('.')) {
        e.preventDefault();
      }
      return;
    }
    // Allow: minus (-) only at the beginning (cursor position 0) and no minus already
    if (e.key === '-') {
      if (cursorPosition === 0 && !currentValue.includes('-')) {
        return;
      }
      e.preventDefault();
      return;
    }
    // Block all other keys
    e.preventDefault();
  };

  const handleChangeNumberField = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (type === 'currency') {
      const rawValue = e.target.value.replace(/,/g, '');
      // Only format if it's a valid number
      if (rawValue === '' || rawValue === '-' || !isNaN(Number(rawValue))) {
        // Format with thousand separators
        const parts = rawValue.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const formattedValue = parts.join('.');
        e.target.value = formattedValue;
      }
    }
  };

  //! [JSX Section]
  return (
    <div className={styles['number-field-container']}>
      <Label disabled={disabled} error={error} required={required}>
        {label}
      </Label>
      <MuiTextField
        {...field}
        {...rest}
        id={field?.name}
        variant='outlined'
        label=''
        error={!!error}
        autoComplete='off'
        disabled={disabled}
        onKeyDown={(e) => handleKeyDownNumberField(e)}
        onChange={(e) => {
          handleChangeNumberField(e);
          field?.onChange(e);
        }}
        slotProps={{
          ...slotProps,
          root: { className: styles['number-field-root'] },
          input: { className: styles['number-field-input-wrapper'] },
          inputLabel: { className: styles['number-field-label'] },
          htmlInput: { className: styles['number-field-input'] },
          formHelperText: { className: styles['number-field-helper-text'] },
        }}
      />
      {error && <small className={styles['error-text']}>{error}</small>}
    </div>
  );
}
