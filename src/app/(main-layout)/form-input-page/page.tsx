'use client';
import { useForm } from 'react-hook-form';
import { RadioCollapse, SelectCollapse, TextfieldCollapse } from './components';
import { DEFAULT_VALUES, TFormInput } from './definition';
import styles from './style.module.scss';

export default function FormInputPage() {
  const { control } = useForm<TFormInput>({
    defaultValues: DEFAULT_VALUES,
  });

  //! [JSX Section]
  return (
    <div className={styles['form-input-page-container']}>
      <p className={styles['page-title']}>Form Input</p>
      <div className={styles['form-section']}>
        <TextfieldCollapse control={control} />
        <SelectCollapse control={control} />
        <RadioCollapse control={control} />
      </div>
    </div>
  );
}
