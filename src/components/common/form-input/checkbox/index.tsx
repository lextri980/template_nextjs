import { Label } from '@/components/common';
import {
  FormControlLabel,
  FormGroup,
  Checkbox as MuiCheckbox,
} from '@mui/material';
import clsx from 'clsx';
import CheckboxCheckIcon from './checkbox-check-icon';
import type { TCheckboxProps } from './definition';
import styles from './style.module.scss';

export default function Checkbox(props: TCheckboxProps) {
  // [Props] Destructuring props
  const {
    options = [],
    label,
    checkboxProps,
    field,
    disabled,
    error,
    required,
    ...rest
  } = props;

  /**
   * [Func] Handle checkbox change
   * @param value - The value of the checkbox
   */
  const handleChange = (value: string) => {
    const currentValues = field?.value ?? [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v: string) => v !== value)
      : [...currentValues, value];
    field?.onChange(newValues);
  };

  //! [JSX Section]
  return (
    <div className={styles['checkbox-container']}>
      <Label disabled={disabled} error={error} required={required}>
        {label}
      </Label>
      {error && <small className='error-text'>{error}</small>}
      <FormGroup {...rest}>
        {options.map((option) => (
          <FormControlLabel
            classes={{
              root: clsx({
                [styles['checkbox-error']]: !!error,
              }),
            }}
            key={option.value}
            control={
              <MuiCheckbox
                {...checkboxProps}
                checked={(field?.value ?? []).includes(option.value)}
                onChange={() => handleChange(option.value)}
                disableRipple
                icon={
                  <CheckboxCheckIcon disabled={disabled ?? option.disabled} />
                }
                checkedIcon={
                  <CheckboxCheckIcon
                    checked
                    disabled={disabled ?? option.disabled}
                  />
                }
              />
            }
            label={option.label}
            disabled={disabled ?? option.disabled}
          />
        ))}
      </FormGroup>
    </div>
  );
}
