import { useEffect, useRef } from 'react';
import { NextPage } from 'next';
import autosize from 'autosize';
import styles from './index.module.css';

const PostPage: NextPage = () => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current != null) {
      autosize(ref.current);
    }
  }, []);

  return (
    <div className={styles.editContent}>
      <input className={styles.subject} type="text" placeholder="タイトル" />
      <textarea
        className={styles.editor}
        placeholder="本文を書きましょう"
        ref={ref}
      />
    </div>
  )
}

export default PostPage;
