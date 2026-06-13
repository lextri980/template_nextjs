'use client';
import { Collapse, Field, TextField } from '@/components/common';
import { TTextfieldCollapseProps } from './defination';
import styles from './style.module.scss';

export default function TextfieldCollapse(props: TTextfieldCollapseProps) {
  // [Props] Destructuring props
  const { control } = props;

  //! [JSX Section]
  return (
    <div className={styles['textfield-collapse-container']}>
      <Collapse title='TEXTFIELD'>
        <div className='cols-3'>
          <Field control={control} name='baseTextfield' label='Base Textfield'>
            <TextField placeholder='Enter this field' />
          </Field>
          <Field
            control={control}
            name='passwordTextfield'
            label='Password Textfield'>
            <TextField type='password' placeholder='Enter this field' />
          </Field>
          <Field
            control={control}
            name='disabledTextfield'
            label='Disabled Textfield'>
            <TextField placeholder='Enter this field' disabled />
          </Field>
          <Field
            control={control}
            name='errorTextfield'
            label='Error Textfield'
            required>
            <TextField
              placeholder='Enter this field'
              error='This field is required'
            />
          </Field>
          <Field control={control} name='textarea' label='Textarea'>
            <TextField placeholder='Enter this field' multiline rows={2} />
          </Field>
        </div>
      </Collapse>
    </div>
  );
}
