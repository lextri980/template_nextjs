import { Tooltip as MuiTooltip } from '@mui/material';
import { TTooltipProps } from './definition';
import styles from './style.module.scss';

export default function Tooltip(props: TTooltipProps) {
  // [Props] Destructuring props
  const { title, children, ...rest } = props;

  /**
   *! [JSX Section]
   */
  return (
    <MuiTooltip title={title} {...rest}>
      <div className={styles['tooltip-content-wrapper']}>{children}</div>
    </MuiTooltip>
  );
}
