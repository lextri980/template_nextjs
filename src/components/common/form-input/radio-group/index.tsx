import { Label } from '@/components/common';
import {
  FormControlLabel,
  RadioGroup as MuiRadioGroup,
  Radio,
} from '@mui/material';
import clsx from 'clsx';
import type { TRadioGroupProps } from './definition';
import RadioCheckIcon from './radio-check-icon';
import styles from './style.module.scss';

export default function RadioGroup(props: TRadioGroupProps) {
  // [Props] Destructuring props
  const {
    options = [],
    label,
    radioProps,
    field,
    disabled,
    error,
    required,
    ...rest
  } = props;

  //! [JSX Section]
  return (
    <div className={styles['radio-group-container']}>
      <Label disabled={disabled} error={error} required={required}>
        {label}
      </Label>
      {error && <small className='error-text'>{error}</small>}
      <MuiRadioGroup {...field} {...rest}>
        {options.map((option) => (
          <FormControlLabel
            classes={{
              root: clsx({
                [styles['radio-error']]: !!error,
              }),
            }}
            key={option.value}
            value={option.value}
            control={
              <Radio
                {...radioProps}
                disableRipple
                icon={<RadioCheckIcon disabled={disabled ?? option.disabled} />}
                checkedIcon={
                  <RadioCheckIcon
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
      </MuiRadioGroup>
    </div>
  );
}
