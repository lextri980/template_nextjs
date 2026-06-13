import { Collapse, Field, RadioGroup } from '@/components/common';
import {
  BASE_RADIO_OPTIONS,
  DISABLED_RADIO_OPTIONS,
  TRadioCollapseProps,
} from './definition';
import styles from './style.module.scss';

export default function RadioCollapse(props: TRadioCollapseProps) {
  // [Props] Destructuring props
  const { control } = props;

  //! [JSX Section]
  return (
    <div className={styles['radio-collapse-container']}>
      <Collapse title='RADIO'>
        <div className='cols-4'>
          <Field control={control} name='baseRadio' label='Base Radio'>
            <RadioGroup options={BASE_RADIO_OPTIONS} />
          </Field>
          <Field control={control} name='disabledRadio' label='Disabled Radio'>
            <RadioGroup options={BASE_RADIO_OPTIONS} disabled />
          </Field>
          <Field
            control={control}
            name='disabledOptionsRadio'
            label='Disabled Options'>
            <RadioGroup options={DISABLED_RADIO_OPTIONS} />
          </Field>
          <Field
            control={control}
            name='errorRadio'
            label='Error Radio'
            required>
            <RadioGroup
              options={BASE_RADIO_OPTIONS}
              error='This field is required'
            />
          </Field>
        </div>
      </Collapse>
    </div>
  );
}
