import { Collapse, Field, NumberField } from '@/components/common';
import { ENumberField } from '@/components/common/form-input/number-field/definition';
import { TNumberFieldCollapseProps } from './definition';
import styles from './style.module.scss';

export default function NumberFieldCollapse(props: TNumberFieldCollapseProps) {
  // [Props] Destructuring props
  const { control } = props;

  //! [JSX Section]
  return (
    <div className={styles['number-field-collapse-container']}>
      <Collapse title='NUMBER FIELD'>
        <div className='cols-3'>
          <Field
            control={control}
            name='baseNumberField'
            label='Base Number Field'>
            <NumberField placeholder='Enter this field' />
          </Field>
          <Field
            control={control}
            name='baseSeparatorNumberField'
            label='Base Separator Number Field'>
            <NumberField
              placeholder='Enter this field'
              type={ENumberField.SEPARATOR}
            />
          </Field>
          <Field
            control={control}
            name='disabledNumberField'
            label='Disabled Number Field'>
            <NumberField placeholder='Enter this field' disabled />
          </Field>
          <Field
            control={control}
            name='errorNumberField'
            label='Error Number Field'
            required>
            <NumberField
              placeholder='Enter this field'
              error='This is error field'
            />
          </Field>
        </div>
      </Collapse>
    </div>
  );
}
