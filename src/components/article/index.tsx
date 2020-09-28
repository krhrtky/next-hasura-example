import React from 'react';
import styles from './index.module.css';


type ParagraphProps = {
  p: string;
};

export const Paragraph: React.FC<ParagraphProps> = ({ p }) => (
  <div className={styles.paragraph}>{p}</div>
)

type ArticleProps = {
  content: string;
};
export const Article: React.FC<ArticleProps> = ({ content }) => {
  console.log(content.split(/\n/))
  return (
    <>
      {content.split(/\n/).map((p, i) => (
        <Paragraph p={p} key={i} />
      ))}
    </>
  );
}
