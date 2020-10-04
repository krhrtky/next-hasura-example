import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import styles from './index.module.css';
import { Editor } from '@/components/editor';

const PostPage: NextPage = () => {
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const handleChangeSubject = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSubject(event.target.value);
    },
    [],
  );

  return (
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
  )
}

export default PostPage;
