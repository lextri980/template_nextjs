'use client';
import { Label } from '@/components/common';
import { Autocomplete, TextField } from '@mui/material';
import { ChevronDown } from '@untitledui/icons';
import { TSelectOption, TSelectProps } from './definition';
import styles from './style.module.scss';

export default function Select(props: TSelectProps) {
  // [Props] Destructuring props
  const {
    options = [],
    disabled,
    error,
    required,
    label,
    placeholder = '',
    hideClearIcon,
    clearIcon,
    field,
    ...rest
  } = props;

  /**
   * [Func] Handle change event for the select component
   * @param data - Data object of option
   */
  const handleChange = (data: TSelectOption | null) => {
    field?.onChange(data?.id ?? null);
  };

  //! [JSX Section]
  return (
    <div className={styles['select-container']}>
      <Label disabled={disabled} error={error} required={required}>
        {label}
      </Label>
      <Autocomplete
        {...field}
        {...rest}
        classes={{
          endAdornment: styles['end-adornment'],
        }}
        options={options}
        disabled={disabled}
        clearIcon={hideClearIcon ? <></> : clearIcon}
        value={options.find((option) => option?.id === field?.value) ?? null}
        getOptionKey={(option) => option?.id?.toString() ?? ''}
        onChange={(_, data) => handleChange(data)}
        popupIcon={<ChevronDown className={styles['caret-icon']} />}
        renderInput={(params) => (
          <TextField
            {...params}
            label=''
            placeholder={placeholder}
            error={!!error}
          />
        )}
      />
      {error && <small className='error-text'>{error}</small>}
    </div>
  );
}
