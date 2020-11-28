import React from 'react';
import styles from './Reviews.module.scss';
import { COMMENTARIES } from "../../config/commentary.config";

export const Reviews = ({ itemId }) => {
  const commentaries = itemId === undefined
    ? COMMENTARIES
    : COMMENTARIES.filter(({ item_id: id }) => id === itemId);

  return (
    <div className={styles.reviews}>
      <h1>{itemId === undefined ? "Отзывы о наших товарах" : "Отзывы о товаре"}</h1>
      <ul className={styles['reviews-list']}>
        {commentaries.map(({ date, name, text }, index) => {
          return (
            <li key={`review_${index}`} className={styles['reviews-item']}>
              <h3 className={styles['review-header']}>{name}, {date}</h3>
              <p className={styles['review-text']}>{text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  )
};
