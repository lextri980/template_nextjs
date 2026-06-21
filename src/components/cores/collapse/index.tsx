import { Accordion } from '@heroui/react';
import { ChevronDown } from '@untitledui/icons';
import clsx from 'clsx';
import { TCollapseProps } from './type';

export function Collapse(props: TCollapseProps) {
  const {
    items,
    uppercaseTitle = false,
    accordionProps,
    accordionItemProps,
    accordionTriggerProps,
    accordionPanelProps,
    accordionIndicatorProps,
    accordionBodyProps,
  } = props;

  return (
    <Accordion {...accordionProps} className='w-full rounded-md' hideSeparator>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <Accordion.Item
            key={index}
            {...accordionItemProps}
            className={clsx({
              'border-collapse-separator-border border-b-4 border-solid':
                items.length !== index + 1,
            })}>
            <Accordion.Heading>
              <Accordion.Trigger
                {...accordionTriggerProps}
                className='rounded-sm'>
                <div className='flex w-full items-center gap-2'>
                  {Icon ? (
                    <span className='text-muted size-4 shrink-0'>
                      <Icon className='size-4' />
                    </span>
                  ) : null}
                  <span
                    className={clsx({
                      uppercase: uppercaseTitle,
                    })}>
                    {item.title}
                  </span>
                  <Accordion.Indicator {...accordionIndicatorProps}>
                    <ChevronDown />
                  </Accordion.Indicator>
                </div>
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel {...accordionPanelProps} className='p-4 py-0'>
              <Accordion.Body
                {...accordionBodyProps}
                className='border-collapse-header-border border-t p-0 py-4'>
                {item.content}
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}
