import { Label } from '@/components/common';
import {
  FormControlLabel,
  RadioGroup as MuiRadioGroup,
  Radio,
} from '@mui/material';
import RadioCheckIcon from './radio-check-icon';
import styles from './style.module.scss';
import type { TRadioGroupProps } from './type';

export default function RadioGroup(props: TRadioGroupProps) {
  // [Props] Destructuring props
  const { options = [], radioProps, field, ...rest } = props;

  //! [JSX Section]
  return (
    <div className={styles['radio-group-container']}>
      <Label>Gender</Label>
      <MuiRadioGroup {...field} {...rest}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={
              <Radio
                {...radioProps}
                disableRipple
                icon={<RadioCheckIcon disabled={option.disabled} />}
                checkedIcon={<RadioCheckIcon checked />}
              />
            }
            label={option.label}
            disabled={option.disabled}
          />
        ))}
      </MuiRadioGroup>
    </div>
  );
}
