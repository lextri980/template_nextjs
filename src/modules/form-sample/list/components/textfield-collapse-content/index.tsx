'use client';
import { Field, Textfield } from '@/components/core';
import { useForm } from 'react-hook-form';
import { TTextfieldCollapseForm } from '../../types';
import { TEXTFIELD_COLLAPSE_FORM_DEFAULT_VALUE } from './constant';

export function TextfieldCollapseContent() {
  const { control } = useForm<TTextfieldCollapseForm>({
    defaultValues: TEXTFIELD_COLLAPSE_FORM_DEFAULT_VALUE,
  });

  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-3 gap-4'>
        <Field control={control} name='baseTextfield' label='Base Textfield'>
          <Textfield placeholder='Enter textfield...' />
        </Field>

        <Field control={control} name='password' label='Password'>
          <Textfield type='password' placeholder='Enter textfield...' />
        </Field>

        <Field
          control={control}
          name='errorTextfield'
          label='Error Textfield'
          required>
          <Textfield
            placeholder='Enter textfield...'
            error='This field is required'
          />
        </Field>
      </div>
    </div>
  );
}
