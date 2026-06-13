'use client';
import { Label, Tooltip } from '@/components/common';
import { DateUtil } from '@/utils';
import { TDateFormat } from '@/utils/date.util';
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
import type { TDatePickerProps } from './definition';
import styles from './style.module.scss';

export default function DatePicker(props: TDatePickerProps) {
  // [Props] Destructuring props
  const {
    disabled,
    error,
    format = DateUtil.DATE_FORMATS.DATE_ONLY,
    label,
    multiple = false,
    placeholder = 'Select date',
    required,
    formatMultipleDates,
    field,
    ...rest
  } = props;

  /**
   * [Func] Handle date change
   * @param date - An individual date or an array of dates depending on the multiple prop
   * If multiple is true, date will be an array of Date objects. Otherwise, it will be a single Date object or null.
   */
  const handleChange = (date: Date | Date[] | null) => {
    field?.onChange(date ?? null);
  };

  /**
   * [Render] Tooltip content for multiple selected dates
   * @returns A string representing the formatted selected dates for display in the tooltip when multiple selection is enabled
   */
  const renderTooltipMultipleDates = () => {
    if (
      !field?.value ||
      !Array.isArray(field.value) ||
      field.value.length === 0
    ) {
      return '';
    }
    return field.value
      .map((date: Date) =>
        DateUtil.format(
          date,
          (format ?? DateUtil.DATE_FORMATS.DATE_ONLY) as TDateFormat
        )
      )
      .join(', ');
  };

  /**
   * [Render] Custom header for the date picker to include month and year navigation controls
   * @param headerProps - Header props of react date picker
   * @returns JSX element representing the custom header for the date picker
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
    <div className={styles['date-picker-container']}>
      <Label
        disabled={disabled}
        error={error}
        required={required}
        className={styles['date-picker-label']}>
        {label}
      </Label>
      {multiple ? (
        <Tooltip title={renderTooltipMultipleDates()} placement='top'>
          <ReactDatePicker
            {...rest}
            {...field}
            selectedDates={field?.value ?? null}
            onChange={handleChange}
            disabled={disabled}
            placeholderText={placeholder}
            dateFormat={format}
            className={clsx({ [styles.error]: !!error })}
            selectsRange={false}
            selectsMultiple={true}
            shouldCloseOnSelect={false}
            calendarStartDay={1}
            formatMultipleDates={formatMultipleDates}
            renderCustomHeader={renderHeader}
            isClearable
          />
        </Tooltip>
      ) : (
        <ReactDatePicker
          {...rest}
          {...field}
          selected={field?.value}
          onChange={handleChange}
          disabled={disabled}
          placeholderText={placeholder}
          dateFormat={format}
          className={clsx({ [styles.error]: !!error })}
          selectsRange={false}
          selectsMultiple={false}
          calendarStartDay={1}
          renderCustomHeader={renderHeader}
          isClearable
        />
      )}
      {error && <small className='error-text mt-1'>{error}</small>}
    </div>
  );
}
