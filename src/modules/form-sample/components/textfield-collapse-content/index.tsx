'use client';
import { Field } from '@/components/cores';
import { Input } from '@heroui/react';
import { useForm } from 'react-hook-form';

export default function TextfieldCollapseContent() {
  const form = useForm({
    defaultValues: {
      baseTextfield: '',
    },
  });

  return (
    <Field control={form.control} name='baseTextfield' label='Base Textfield'>
      <Input />
    </Field>
  );
}
