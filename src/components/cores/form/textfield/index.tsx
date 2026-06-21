'use client';
import { useCallback, useState } from 'react';
import { InputGroup } from '@heroui/react';
import { Eye, EyeOff } from '@untitledui/icons';
import clsx from 'clsx';
import Label from '../../label';
import { TEXTFIELD_TYPE } from './constant';
import { TTextfieldProps, TTextfieldType } from './type';

export default function Textfield(props: TTextfieldProps) {
  const {
    error,
    field,
    label,
    required,
    type,
    renderPrefix,
    renderSuffix,
    ...rest
  } = props;

  const [isRevealPassword, setIsRevealPassword] = useState<boolean>(false);
  const [rootType, setRootType] = useState<TTextfieldType>(
    TEXTFIELD_TYPE.PASSWORD
  );

  /**
   * [Func]
   * Change input's type and icon when click on password eye icon
   */
  const handleClickPasswordEye = useCallback(() => {
    setIsRevealPassword(!isRevealPassword);
    setRootType(
      rootType === TEXTFIELD_TYPE.PASSWORD
        ? TEXTFIELD_TYPE.TEXT
        : TEXTFIELD_TYPE.PASSWORD
    );
  }, [isRevealPassword, rootType]);

  /**
   * [Render]
   * Render icon based on current input's type
   */
  const renderEyesPassword = useCallback(() => {
    return isRevealPassword ? (
      <EyeOff
        className='text-input-border-focus size-5 cursor-pointer'
        onClick={handleClickPasswordEye}
      />
    ) : (
      <Eye
        className='text-input-border-focus size-5 cursor-pointer'
        onClick={handleClickPasswordEye}
      />
    );
  }, [isRevealPassword, handleClickPasswordEye]);

  /** [Return JSX] */
  return (
    <div
      className={clsx('c_textfield-container', 'flex w-full flex-col gap-1.5')}>
      <Label required={required} error={error}>
        {label}
      </Label>

      <InputGroup
        className={clsx(
          'bg-input-background h-8 rounded-sm border text-base shadow-[none]',
          error
            ? 'border-input-border-error'
            : 'border-input-border hover:border-input-border-hover focus:border-input-border-focus'
        )}>
        {renderPrefix && (
          <InputGroup.Prefix>{renderPrefix()}</InputGroup.Prefix>
        )}

        <InputGroup.Input
          {...field}
          {...rest}
          type={type === TEXTFIELD_TYPE.PASSWORD ? rootType : type}
          className={clsx('w-full', { 'text-error': error })}
        />

        {(renderSuffix || type === 'password') && (
          <InputGroup.Suffix>
            <div className='flex items-center gap-1'>
              {renderSuffix?.()}
              {renderEyesPassword()}
            </div>
          </InputGroup.Suffix>
        )}
      </InputGroup>
      {error && <small className='text-error'>{error}</small>}
    </div>
  );
}
