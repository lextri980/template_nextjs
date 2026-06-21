'use client';
import React from 'react';
import { Controller, FieldPath, FieldValues } from 'react-hook-form';
import { TFieldProps } from './type';

export function Field<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: TFieldProps<TFieldValues, TName>) {
  const { control, name, defaultValue, label, required, children } = props;

  return (
    <Controller
      control={control}
      name={name}
      {...(defaultValue !== undefined && { defaultValue })}
      render={({ field, fieldState, formState }) => (
        <>
          {typeof children === 'function'
            ? children({ field, fieldState, formState })
            : React.isValidElement(children)
              ? React.cloneElement(children, {
                  label,
                  field,
                  required,
                })
              : null}
        </>
      )}
    />
  );
}
