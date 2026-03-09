'use client';
import { Label } from '@/components/common';
import { DATE_FORMATS } from '@/utils/date.util';
import clsx from 'clsx';
import { DatePicker as ReactDatePicker } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import type { TDatePickerProps } from './definition';
import styles from './style.module.scss';

export default function DatePicker(props: TDatePickerProps) {
  // [Props] Destructuring props
  const {
    label,
    disabled,
    error,
    required,
    placeholder = 'Select date',
    selectsMultiple = false,
    format = DATE_FORMATS.DATE_ONLY,
    formatMultipleDates, // This must be undefined when selectsMultiple is false
    field,
    ...rest
  } = props;

  /**
   * [Func] Handle date change
   * @param date - An individual date or an array of dates depending on the selectsMultiple prop
   * If selectsMultiple is true, date will be an array of Date objects. Otherwise, it will be a single Date object or null.
   */
  const handleChange = (date: Date | Date[] | null) => {
    if (selectsMultiple && Array.isArray(date)) {
      field?.onChange(date ?? null);
    } else {
      field?.onChange(date ?? null);
    }
  };

  //! [JSX Section]
  return (
    <div className={styles['date-picker-container']}>
      <Label disabled={disabled} error={error} required={required}>
        {label}
      </Label>
      {selectsMultiple ? (
        <ReactDatePicker
          {...rest}
          {...field}
          selectedDates={field?.value ?? null}
          onChange={handleChange}
          disabled={disabled}
          placeholderText={placeholder}
          dateFormat={format}
          className={clsx({ error: !!error })}
          selectsRange={false}
          selectsMultiple={true}
          shouldCloseOnSelect={false}
          formatMultipleDates={formatMultipleDates}
        />
      ) : (
        <ReactDatePicker
          {...rest}
          {...field}
          selected={field?.value}
          onChange={handleChange}
          disabled={disabled}
          placeholderText={placeholder}
          dateFormat={format}
          className={clsx({ error: !!error })}
          selectsRange={false}
          selectsMultiple={false}
        />
      )}
      {error && <small className='error-text'>{error}</small>}
    </div>
  );
}
