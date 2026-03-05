'use client';
import { useForm } from 'react-hook-form';
import {
  CheckboxCollapse,
  NumberFieldCollapse,
  RadioCollapse,
  SelectCollapse,
  TextfieldCollapse,
} from './components';
import { DEFAULT_VALUES, TFormInput } from './definition';
import styles from './style.module.scss';

export default function FormInputPage() {
  const { control, getValues } = useForm<TFormInput>({
    defaultValues: DEFAULT_VALUES,
  });

  //! [JSX Section]
  return (
    <div className={styles['form-input-page-container']}>
      <p className={styles['page-title']}>Form Input</p>
      <button
        onClick={() => {
          console.log(getValues());
        }}>
        Log
      </button>
      <div className={styles['form-section']}>
        <TextfieldCollapse control={control} />
        <NumberFieldCollapse control={control} />
        <SelectCollapse control={control} />
        <RadioCollapse control={control} />
        <CheckboxCollapse control={control} />
      </div>
    </div>
  );
}
