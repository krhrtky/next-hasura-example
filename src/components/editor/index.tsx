import React, { ChangeEvent, useCallback, useEffect, useRef } from 'react';
import autosize from 'autosize';
import styles from '@/pages/post/index.module.css';
import { useClassNames } from '@/utils';

type Props = {
  value: string;
  onEdit: (text: string) => void;
  placeholder?: string;
  className?: string;
};

export const Editor: React.FC<Props> = ({
  value,
  onEdit,
  placeholder,
  className
}) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current != null) {
      autosize(ref.current);
    }
  }, []);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      onEdit(event.target.value);
    },
    [onEdit],
  );

  const _className = useClassNames(styles.editor, className);

  return (
    <textarea
      className={_className}
      placeholder={placeholder}
      ref={ref}
      onChange={handleChange}
      value={value}
    />
  );
}
