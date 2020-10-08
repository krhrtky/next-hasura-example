import React, { ChangeEvent, useCallback, useState } from 'react';
import { NextPage } from 'next';
import { useRouter} from 'next/router';
import { Editor } from '@/components/editor';
import { Button } from '@/components/button';
import { SiteHeader, SiteHeaderItem } from '@/components/siteHeader';
import  { usePostArticleMutation } from '@/generated/graphql'

import styles from './index.module.css';
import { UserIcon } from '@/components/userIcon';

const PostPage: NextPage = () => {
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [postArticle] = usePostArticleMutation();
  const [postDisabled, setPostDisabled] = useState(false);
  const router = useRouter();

  const handleChangeSubject = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSubject(event.target.value);
    },
    [],
  );

  const handlePost = useCallback(
    async (ev: React.FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      if (!content || !subject || postDisabled) {
        return;
      }

      setPostDisabled(true);
      const { data } = await postArticle({
        variables: {
          // TODO: 仮置
          authorId: 'cacf2694-3ead-450b-8138-a3fc680e9b2c',
          content,
          subject,
          publishedAt: 'now()',
        },
      });

      if (data && data.insert_articles_one) {
        const articleId = data.insert_articles_one.id;
        // TODO: 仮置
        router.push(`/user1/${articleId}`);
        setPostDisabled(false);
      } else {
        console.log('POST unknown state', data);
      }
    },
    [content, subject, postDisabled, postArticle, router],
  );

  const siteHeaderRight = (
    <>
      <SiteHeaderItem>
        <form onSubmit={handlePost}>
          <Button type="submit">
            <span>投稿する</span>
          </Button>
        </form>
      </SiteHeaderItem>
      <SiteHeaderItem>
        <UserIcon src="/profile.png" />
      </SiteHeaderItem>
    </>
  )

  return (
    <>
      <SiteHeader right={siteHeaderRight} />
      <div className={styles.editContent}>
        <input
          className={styles.subject}
          type="text"
          placeholder="タイトル"
          value={subject}
          onChange={handleChangeSubject}
        />
        <Editor
          value={content}
          onEdit={setContent}
          placeholder="本文を書きましょう"
          className={styles.editor}
        />
      </div>
    </>
  )
}

export default PostPage;
