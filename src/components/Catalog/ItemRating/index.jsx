import React from 'react';
import styles from './ItemRating.module.scss';

export const ItemRating = ({ item, style, starsFS, reviewsFS }) => {
  return (
    <div className={styles['rating-block']} style={{ ...style }}>
      <div className={styles['rating-stars']} style={{ '--rating': item.rating, fontSize: starsFS ?? 20 }} />
      <div className={styles['rating-reviews']} style={{ fontSize: reviewsFS ?? 14 }}>
        Отзывы({item.reviews})
      </div>
    </div>
  );
};
