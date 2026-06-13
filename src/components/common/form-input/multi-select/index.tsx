'use client';
import { Label } from '@/components/common';
import { Autocomplete, TextField } from '@mui/material';
import { ChevronDown } from '@untitledui/icons';
import clsx from 'clsx';
import { TSelectOption } from '../select/definition';
import { TMultiSelectProps } from './definition';
import styles from './style.module.scss';

export default function MultiSelect(props: TMultiSelectProps) {
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
    disableCloseOnSelect = true,
    tagMaxWidth = '100px',
    tagLimit = 2,
    field,
    ...rest
  } = props;

  /**
   * [Func] Handle change event for the select component
   * @param data - Data object of option
   */
  const handleChange = (data: TSelectOption[] | null) => {
    field?.onChange(data?.map((option) => option.id) ?? []);
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
          tag: clsx(styles['shortcut-tag'], {
            [styles['shortcut-tag-error']]: !!error,
          }),
          input: styles['input-search'],
        }}
        multiple
        disableCloseOnSelect={disableCloseOnSelect}
        options={options}
        disabled={disabled}
        clearIcon={hideClearIcon ? <></> : clearIcon}
        value={
          options.filter((option) => field?.value?.includes(option?.id)) ?? []
        }
        limitTags={tagLimit}
        getOptionKey={(option) => option?.id?.toString() ?? ''}
        onChange={(_, data) => handleChange(data)}
        popupIcon={<ChevronDown className={styles['caret-icon']} />}
        getLimitTagsText={(more) => (
          <span className={styles['tag-text']}>+{more}</span>
        )}
        renderValue={(selected) => {
          return selected.map((option) => (
            <span
              className={clsx(styles['tag-value'], {
                [styles['tag-value-error']]: !!error,
              })}
              key={option.id}
              style={{ maxWidth: tagMaxWidth }}>
              {option.label}
            </span>
          ));
        }}
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
