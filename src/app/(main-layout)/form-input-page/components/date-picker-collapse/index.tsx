'use client';
import {
  Collapse,
  DatePicker,
  DateRangePicker,
  Field,
} from '@/components/common';
import { TDatePickerCollapseProps } from './definition';
import styles from './style.module.scss';

export default function DatePickerCollapse(props: TDatePickerCollapseProps) {
  // [Props] Destructuring props
  const { control } = props;

  //! [JSX Section]
  return (
    <div className={styles['date-picker-collapse-container']}>
      <Collapse title='DATE PICKER' defaultExpanded>
        <div className='cols-3'>
          <Field
            control={control}
            name='baseDatePicker'
            label='Base DatePicker'>
            <DatePicker placeholderText='Select date' />
          </Field>
          <Field
            control={control}
            name='multiDatePicker'
            label='Multi DatePicker'>
            <DatePicker placeholderText='Select date' multiple />
          </Field>
          <Field
            control={control}
            name='rangeDatePicker'
            label='Range DatePicker'>
            <DateRangePicker placeholderText='Select range' />
          </Field>
          <Field
            control={control}
            name='disabledDatePicker'
            label='Disabled DatePicker'>
            <DatePicker placeholderText='Select date' disabled />
          </Field>
          <Field
            control={control}
            name='errorDatePicker'
            label='Error DatePicker'
            required>
            <DatePicker
              placeholderText='Select date'
              error='This field is required'
            />
          </Field>
        </div>
      </Collapse>
    </div>
  );
}
