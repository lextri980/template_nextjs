import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { ChevronDown } from '@untitledui/icons';
import { TCollapseProps } from './defination';
import styles from './style.module.scss';

export default function Collapse(props: TCollapseProps) {
  // [Props] Destructuring props
  const { title, children, defaultExpanded = false } = props;

  //! [JSX Section]
  return (
    <div className={styles['collapse-container']}>
      <Accordion defaultExpanded={defaultExpanded}>
        <AccordionSummary
          expandIcon={<ChevronDown />}
          aria-controls='panel-content'
          id='panel-header'>
          {title}
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
}
