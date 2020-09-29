import * as React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useGetArticleQuery } from '@/generated/graphql';
import Error from 'next/error';
import { Article } from '@/components/article';

import styles from './index.module.css';

const Index: NextPage = () => {
  const router = useRouter();
  const { articleId } = router.query;

  const { loading, error, data} = useGetArticleQuery({
    variables: {
      id: articleId as string,
    }
  });

  if (loading) {
    return <p>...loading</p>
  }

  if (error) {
    return <p>{error.toString()}</p>
  }

  if (!data || !data.articles_by_pk) {
    return <Error statusCode={404} />
  }

  const { user, subject, content, publishedAt } = data.articles_by_pk;

  if (!publishedAt) {
    return <Error statusCode={404} />
  }

  return (
    <div className={styles.contentContainer}>
      <h1 className={styles.subject}>{subject}</h1>
      <div className={styles.userContainer}>
        <div><img className={styles.userIcon} src="/profile.png" alt="profile" /></div>
        <div>
          <div className={styles.userText}>
            <div className={styles.userId}>{user.displayName} @{user.displayId}</div>
            <span className={styles.publishedAt}>
              {new Date(publishedAt).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <Article content={content} />
      </div>
    </div>
  );
};

export default Index;
