import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import { Editor } from '@/components/editor';
import { Button } from '@/components/button';
import { SiteHeader, SiteHeaderItem } from '@/components/siteHeader';

import styles from './index.module.css';

const PostPage: NextPage = () => {
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const handleChangeSubject = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSubject(event.target.value);
    },
    [],
  );

  const siteHeaderRight = (
    <>
      <SiteHeaderItem>
        <Button type="submit"><span>投稿する</span></Button>
      </SiteHeaderItem>
      <SiteHeaderItem>
        <img src="/profile.png" className={styles.userIcon} />
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
      <footer className={styles.footer}>
        <Button className={styles.submitButton}>投稿する</Button>
      </footer>
    </>
  )
}

export default PostPage;
