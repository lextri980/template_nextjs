import { useMemo } from 'react';
import { Collapse } from '@/components/cores';
import {
  CalendarDate,
  CalendarMinus01,
  CheckCircle,
  CheckSquare,
  Menu01,
  Passcode,
  TextInput,
} from '@untitledui/icons';
import { TextfieldCollapseContent } from './components';

export default function FormSampleModule() {
  const items = useMemo(
    () => [
      {
        title: 'Textfield',
        content: <TextfieldCollapseContent />,
        icon: TextInput,
      },
      {
        title: 'Number field',
        content: <></>,
        icon: Passcode,
      },
      {
        title: 'Select',
        content: <></>,
        icon: Menu01,
      },
      {
        title: 'Radio group',
        content: <></>,
        icon: CheckCircle,
      },
      {
        title: 'Checkbox group',
        content: <></>,
        icon: CheckSquare,
      },
      {
        title: 'Date picker',
        content: <></>,
        icon: CalendarDate,
      },
      {
        title: 'Date range picker',
        content: <></>,
        icon: CalendarMinus01,
      },
    ],
    []
  );

  return (
    <div className='flex flex-col gap-4'>
      <p className='flex items-center justify-center text-2xl font-semibold'>
        FORM SAMPLE
      </p>
      <div className='flex flex-col px-4'>
        <Collapse
          items={items}
          uppercaseTitle
          accordionProps={{
            variant: 'surface',
            allowsMultipleExpanded: true,
          }}
        />
      </div>
    </div>
  );
}
