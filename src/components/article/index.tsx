import React from 'react';
import styles from './index.module.css';
import { formatArticle } from '@/utils/articles';


type ParagraphProps = {
  p: string;
};

export const Paragraph: React.FC<ParagraphProps> = ({ p }) => (
  <div className={styles.paragraph}>{p}</div>
)

type ArticleProps = {
  content: string;
};
export const Article: React.FC<ArticleProps> = ({ content }) => (
  <>
    {formatArticle(content).map((p, i) => (
      <Paragraph p={p} key={i} />
    ))}
  </>
);

