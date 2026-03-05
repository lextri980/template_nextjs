import { Label } from '@/components/common';
import MuiTextField from '@mui/material/TextField';
import { ChangeEvent, KeyboardEvent, useMemo } from 'react';
import {
  ACTION_KEYS,
  CONTROL_KEYS,
  ENumberField,
  TNumberFieldProps,
} from './definition';
import styles from './style.module.scss';

export default function NumberField(props: TNumberFieldProps) {
  // [Props] Destructuring props
  const {
    label,
    disabled,
    error,
    type = ENumberField.DEFAULT,
    required,
    slotProps,
    field,
    ...rest
  } = props;

  /**
   * [Func] Handle key down event for the number field to allow only valid keys
   * @param e - Keyboard event
   */
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

  /**
   * [Func] Handle change format for the number field
   * @param e - Change event
   * @returns The raw value (without formatting) to store in form state
   */
  const handleChangeNumberField = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): string => {
    if (type === ENumberField.SEPARATOR) {
      const rawValue = e.target.value.replace(/,/g, '');
      // Only format if it's a valid number
      if (rawValue === '' || rawValue === '-' || !isNaN(Number(rawValue))) {
        // Format with thousand separators for display
        const parts = rawValue.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const formattedValue = parts.join('.');
        e.target.value = formattedValue;
        // Return raw value to store in form state
        return rawValue;
      }
    }
    return e.target.value;
  };

  /**
   * [Memo]
   * Calculate internal error state for the number field based on the current value.
   * This checks if the value is a valid number (after removing commas) and sets an error message if it's not.
   */
  const internalError = useMemo(() => {
    if (field?.value) {
      const rawValue = String(field.value).replace(/,/g, '');
      if (rawValue !== '' && rawValue !== '-' && isNaN(Number(rawValue))) {
        return 'The value must be a valid number';
      }
    }
    return null;
  }, [field?.value]);

  /**
   * [Memo]
   * Format the display value with thousand separators if type is SEPARATOR
   */
  const displayValue = useMemo(() => {
    if (type === ENumberField.SEPARATOR && field?.value) {
      const rawValue = String(field.value).replace(/,/g, '');
      if (rawValue && rawValue !== '-' && !isNaN(Number(rawValue))) {
        const parts = rawValue.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
      }
    }
    return field?.value ?? '';
  }, [field, type]);

  //! [JSX Section]
  return (
    <div className={styles['number-field-container']}>
      <Label
        disabled={disabled}
        error={internalError || error}
        required={required}>
        {label}
      </Label>
      <MuiTextField
        {...field}
        {...rest}
        value={displayValue}
        id={field?.name}
        variant='outlined'
        label=''
        error={!!internalError || !!error}
        autoComplete='off'
        disabled={disabled}
        onKeyDown={(e) => handleKeyDownNumberField(e)}
        onChange={(e) => {
          const rawValue = handleChangeNumberField(e);
          field?.onChange(rawValue);
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
      {(internalError || error) && (
        <small className={styles['error-text']}>{internalError || error}</small>
      )}
    </div>
  );
}
