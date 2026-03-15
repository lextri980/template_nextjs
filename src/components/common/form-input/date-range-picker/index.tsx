'use client';
import { Label } from '@/components/common';
import { DateUtil } from '@/utils';
import {
  ChevronLeft,
  ChevronLeftDouble,
  ChevronRight,
  ChevronRightDouble,
} from '@untitledui/icons';
import clsx from 'clsx';
import {
  DatePicker as ReactDatePicker,
  ReactDatePickerCustomHeaderProps,
} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import type { TDateRangePickerProps } from './definition';
import styles from './style.module.scss';

export default function DateRangePicker(props: TDateRangePickerProps) {
  // [Props] Destructuring props
  const {
    disabled,
    error,
    format = DateUtil.DATE_FORMATS.DATE_ONLY,
    label,
    placeholderStart = 'Start date',
    placeholderEnd = 'End date',
    required,
    field,
    ...rest
  } = props;

  // [State] Start and end date derived from field value
  const startDate: Date | null = Array.isArray(field?.value)
    ? (field.value[0] ?? null)
    : null;
  const endDate: Date | null = Array.isArray(field?.value)
    ? (field.value[1] ?? null)
    : null;

  /**
   * [Func] Handle date range change
   * @param dates - A tuple of [startDate, endDate]
   */
  const handleChange = (dates: [Date | null, Date | null]) => {
    field?.onChange(dates);
  };

  /**
   * [Render] Custom header for the date range picker
   * @param headerProps - Header props of react date picker
   * @returns JSX element representing the custom header
   */
  const renderHeader = (headerProps: ReactDatePickerCustomHeaderProps) => {
    return (
      <div className={styles['header-wrapper']}>
        <span className={styles['chevron-icon']}>
          <ChevronLeftDouble onClick={() => headerProps.decreaseYear()} />
          <ChevronLeft onClick={() => headerProps.decreaseMonth()} />
        </span>
        <span className={styles['header-date-value']}>
          {DateUtil.getMonth(headerProps.monthDate)}&nbsp;/&nbsp;
          {DateUtil.getYear(headerProps.monthDate)}
        </span>
        <span className={styles['chevron-icon']}>
          <ChevronRight onClick={() => headerProps.increaseMonth()} />
          <ChevronRightDouble onClick={() => headerProps.increaseYear()} />
        </span>
      </div>
    );
  };

  //! [JSX Section]
  return (
    <div className={styles['date-range-picker-container']}>
      <Label
        disabled={disabled}
        error={error}
        required={required}
        className={styles['date-range-picker-label']}>
        {label}
      </Label>
      <ReactDatePicker
        {...rest}
        {...field}
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        onChange={handleChange}
        disabled={disabled}
        placeholderText={startDate ? placeholderEnd : placeholderStart}
        dateFormat={format}
        className={clsx({ [styles.error]: !!error })}
        selectsRange={true}
        selectsMultiple={false}
        calendarStartDay={1}
        renderCustomHeader={renderHeader}
        isClearable
      />
      {error && <small className='error-text mt-1'>{error}</small>}
    </div>
  );
}
