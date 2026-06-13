import { Accordion } from '@heroui/react';
import { ChevronDown, ShoppingBag01 } from '@untitledui/icons';
import { TCollapseProps } from './type';

const items = [
  {
    content:
      "Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",
    icon: <ShoppingBag01 />,
    title: 'How do I place an order?',
  },
];

export default function Collapse(props: TCollapseProps) {
  const {} = props;

  return (
    <Accordion className='w-full'>
      {items.map((item, index) => (
        <Accordion.Item key={index}>
          <Accordion.Heading>
            <Accordion.Trigger>
              {item.icon ? (
                <span className='text-muted mr-3 size-4 shrink-0'>
                  {item.icon}
                </span>
              ) : null}
              {item.title}
              <Accordion.Indicator>
                <ChevronDown />
              </Accordion.Indicator>
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body>{item.content}</Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
