import * as React from 'react';
import { User } from '@/generated/graphql';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons/faEllipsisH';
import { UserIcon } from '@/components/userIcon';
import { Button } from '@/components/button';

import styles from './index.module.css';

type ArticleFooterProps = {
  user: Pick<User, 'displayId' | 'displayName'>;
}

export const ArticleFooter: React.FC<ArticleFooterProps> = ({ user }) => (
  <>
    {' '}
    <div className={styles.articleFooterContainer}>
      <div>
        <FontAwesomeIcon icon={faThumbsUp}/>
      </div>
      <div>
        <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
        <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
        <FontAwesomeIcon className={styles.icon} icon={faEllipsisH} />
        &nbsp; 655356イイネ！
      </div>
    </div>
    <div className={styles.articleFooter}>
      <UserIcon src="/profile.png"/>
      <div className={styles.userText}>
        <div>{user.displayName}</div>
        <p className={styles.userDescription}>○○をやっています。</p>
      </div>
      <div><Button>Follow</Button></div>
    </div>
  </>
)

