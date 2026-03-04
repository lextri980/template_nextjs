import { Collapse, Field, NumberField } from '@/components/common';
import { TNumberFieldCollapseProps } from './definition';
import styles from './style.module.scss';

export default function NumberFieldCollapse(props: TNumberFieldCollapseProps) {
  // [Props] Destructuring props
  const { control } = props;

  //! [JSX Section]
  return (
    <div className={styles['number-field-collapse-container']}>
      <Collapse title='NUMBER FIELD' defaultExpanded>
        <div className='cols-3'>
          <Field
            control={control}
            name='baseNumberField'
            label='Base Number Field'>
            <NumberField placeholder='Enter this field' />
          </Field>
        </div>
      </Collapse>
    </div>
  );
}
