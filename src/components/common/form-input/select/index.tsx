import { Label } from '@/components/common';
import { Autocomplete, TextField } from '@mui/material';
import { TSelectProps } from './definition';
import styles from './style.module.scss';

export default function Select(props: TSelectProps) {
  // [Props] Destructuring props
  const { options = [], disabled, error, required, label, ...rest } = props;

  //! [JSX Section]
  return (
    <div className={styles['select-container']}>
      <Label disabled={disabled} error={error} required={required}>
        {label}
      </Label>
      <Autocomplete
        {...rest}
        options={options}
        renderInput={(params) => <TextField {...params} label='' />}
      />
    </div>
  );
}
