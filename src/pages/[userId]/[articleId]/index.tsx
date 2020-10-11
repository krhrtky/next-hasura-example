import * as React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useGetArticleQuery, User } from '@/generated/graphql';
import Error from 'next/error';
import { Article } from '@/components/article';
import { ArticleHeader } from '@/components/article/articleHeader';
import { SiteHeader } from '@/components/siteHeader';

import styles from './index.module.css';
import { ArticleFooter } from '@/components/article/articleFooter';

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
    <>
      <SiteHeader />
      <div className={styles.contentContainer}>
        <ArticleHeader subject={subject} user={user} publishedAt={publishedAt} />
        <div className={styles.content}>
          <Article content={content} />
        </div>
        <ArticleFooter user={user} />
      </div>
    </>
  );
};

export default Index;
