import { Checkbox, Collapse, Field } from '@/components/common';
import {
  BASE_CHECKBOX_OPTIONS,
  DISABLED_OPTION_CHECKBOX_OPTIONS,
  TCheckboxCollapseProps,
} from './definition';

export default function CheckboxCollapse(props: TCheckboxCollapseProps) {
  // [Props] Destructuring props
  const { control } = props;

  //! [JSX Section]
  return (
    <div>
      <Collapse title='CHECKBOX' defaultExpanded>
        <div className='cols-4'>
          <Field control={control} name='baseCheckbox' label='Base Checkbox'>
            <Checkbox options={BASE_CHECKBOX_OPTIONS} />
          </Field>
          <Field
            control={control}
            name='disabledCheckbox'
            label='Disabled Checkbox'>
            <Checkbox options={BASE_CHECKBOX_OPTIONS} disabled />
          </Field>
          <Field
            control={control}
            name='disabledOptionCheckbox'
            label='Disabled Option Checkbox'>
            <Checkbox options={DISABLED_OPTION_CHECKBOX_OPTIONS} />
          </Field>
          <Field control={control} name='errorCheckbox' label='Error Checkbox'>
            <Checkbox
              options={BASE_CHECKBOX_OPTIONS}
              error='This field is required'
            />
          </Field>
        </div>
      </Collapse>
    </div>
  );
}
