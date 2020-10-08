import React from 'react';
import styles from './index.module.css';

type Props = {
  src: string;
};

export const UserIcon: React.FC<Props> = ({ src }) => (
  <img src={src} alt="user-icon" className={styles.userIcon} />
)
