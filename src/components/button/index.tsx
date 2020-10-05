import React, { ComponentPropsWithRef } from 'react';
import { useClassNames } from '@/utils';

import styles from './index.module.css';

type Props = ComponentPropsWithRef<'button'>;

export const Button: React.FC<Props> = ({ className, children, ...rest }) => {
  const _className = useClassNames(styles.button, className);

  return (
    <button className={_className} {...rest}>{children}</button>
  );
}