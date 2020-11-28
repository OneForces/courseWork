import React, { useState } from 'react';
import styles from './Item.module.scss';
import cn from 'classnames';
import { CATALOG_GOODS } from "../../config/goods.config";
import { ItemRating } from "../../components/Catalog/ItemRating";
import { DELIVERY_PRICES } from "../../config/delivery.config";
import { Reviews } from "../Reviews";
import { Link } from "react-router-dom";

export const Item = ({ match: { params }, history }) => {
  const [priceFactor, setPriceFactor] = useState(1);
  const [isFastDelivery, setDeliveryState] = useState(false);
  const updateDeliveryState = () => setDeliveryState(!isFastDelivery);
  const fastDeliveryPrice = isFastDelivery ? 1000 : 0;

  const { itemId } = params;
  const item = CATALOG_GOODS.find(({ id }) => id === ~~itemId);
  const deliveryPrice = DELIVERY_PRICES[item.deliveryCity] || "Бесплатно";
  const canBuy = item.count > 0;

  if (item === undefined) {
    return <div>Артикул товара {itemId} не найден.</div>;
  }

  const updateFactor = (sign) => {
    const factor = sign === 'positive' ? 1 : -1;
    return () => {
      const newFactor = priceFactor + factor;

      return newFactor <= 0 ? setPriceFactor(1) : setPriceFactor(newFactor);
    }
  }

  const buttonOrderClass = cn(styles['order-button'], {
    [styles.disabled]: !canBuy,
  });

  const toOrder = () => {
    if (canBuy) return history.push(`/order/${itemId}?fd=${isFastDelivery}&count=${priceFactor}`);
  }

  return (
    <div id={`article_${itemId}`}>
      <div className={styles['item-info']}>
        <div className={styles.product}>
          <img src={item.picture} alt="Изображение продукта" />
        </div>
        <div className={styles.info}>
          <div className={styles['item-name']}>
            {item.name}
          </div>
          <div className={styles['item-price']}>
            <div className={styles.price}>
              {(item.price * priceFactor - item.discount * priceFactor + fastDeliveryPrice).toLocaleString()} &#8381;
            </div>
            {item.discount > 0 &&
              <div className={styles['item-price-old']}>
                <div className={styles.price}>
                  {(item.price * priceFactor + fastDeliveryPrice).toLocaleString()} &#8381;
                </div>
              </div>
            }
          </div>
          <ItemRating
            item={item} reviewsFS={20} starsFS={30} style={{ justifyContent: 'space-between', fontSize: 20 }}
          />
          <div className={styles.misc}>
            <div className={styles.counter}>
              <div className={styles['counter-plus']} onClick={updateFactor('positive')}>+</div>
              <input
                type="text"
                className={styles['counter-count']}
                value={priceFactor}
                size={('' + priceFactor).length}
                readOnly
              />
              <div className={styles['counter-minus']} onClick={updateFactor('negative')}>-</div>
            </div>
            <div className={styles.delivery}>
              <input type="checkbox" id="checkbox-delivery" checked={isFastDelivery} onChange={updateDeliveryState} />
              <label htmlFor="checkbox-delivery">Быстрая доставка</label>
            </div>
          </div>
          <div className={styles['delivery-info']}>
            <div className={styles['delivery-info-section']}>
              Город отправления: <span className={styles.underline}>{item.deliveryCity}</span>
            </div>
            <div className={styles['delivery-info-section']}>
              Стоимость доставки: <span className={styles.red}>{deliveryPrice}</span>
            </div>
            <div className={styles['delivery-info-section']}>
              Срок доставки: <span className={styles.gray}>1-3 дня</span>
            </div>
            <div className={styles['delivery-info-section']}>
              Средний вес: <span className={styles.gray}>{item.weight} гр.</span>
            </div>
          </div>
          <div className={buttonOrderClass} onClick={toOrder}>
            <div className={styles['order-button-text']}>
              {canBuy ? "Заказать" : "Заказ невозможен (Товара нет в наличии)"}
            </div>
          </div>
        </div>
      </div>
      <Reviews itemId={item.id} />
    </div>
  );
};
