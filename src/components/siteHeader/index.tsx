import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import styles from './index.module.css';
import { UserIcon } from '@/components/userIcon';
import { Logo } from '@/components/logo';

export { SiteHeaderItem } from './item';

type Props = {
  left?: JSX.Element;
  right?: JSX.Element;
};

export const SiteHeader: React.FC<Props> = ({ left, right }) => {
  const router = useRouter();

  const handleClickLogo = useCallback(() => {
    router.push('/');
  }, [router]);

  const leftElement = left ? (
    left
  ) : (
    <a onClick={handleClickLogo}>
      <Logo />
    </a>
  )

  const rightElement = right ? (
    right
  ) : (
    <UserIcon src="/profile.png" />
  );

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {leftElement}
      </div>
      <div className={styles.right}>
        {rightElement}
      </div>
    </header>
  )
}

