import { Collapse, Field, MultiSelect, Select } from '@/components/common';
import { BASE_SELECT_OPTIONS, TSelectCollapseProps } from './defination';
import styles from './style.module.scss';

export default function SelectCollapse(props: TSelectCollapseProps) {
  // [Props] Destructuring props
  const { control } = props;

  //! [JSX Section]
  return (
    <div className={styles['select-container']}>
      <Collapse title='SELECT' defaultExpanded>
        <div className='cols-3'>
          <Field control={control} label='Base Select' name='baseSelect'>
            <Select options={BASE_SELECT_OPTIONS} placeholder='Choose option' />
          </Field>
          <Field
            control={control}
            label='Disabled Select'
            name='disabledSelect'>
            <Select
              options={BASE_SELECT_OPTIONS}
              placeholder='Choose option'
              disabled
            />
          </Field>
          <Field
            control={control}
            label='Error Select'
            name='errorSelect'
            required>
            <Select
              options={BASE_SELECT_OPTIONS}
              placeholder='Choose option'
              error='This field is requried'
              getOptionDisabled={(option) => option.id === 1}
            />
          </Field>
          <Field control={control} label='Multi-Select' name='multiSelect'>
            <MultiSelect
              options={BASE_SELECT_OPTIONS}
              placeholder='Choose options'
            />
          </Field>
        </div>
      </Collapse>
    </div>
  );
}
