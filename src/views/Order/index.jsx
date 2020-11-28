import React, { useState } from 'react';
import styles from './Order.module.scss';
import { CATALOG_GOODS } from "../../config/goods.config";
import { DELIVERY_PRICES } from "../../config/delivery.config";

export const Order = ({ match: { params }, location, history }) => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [mail, setMail] = useState('');
  const [city, setCity] = useState('Москва');
  const [isOrdered, setOrder] = useState(false);
  const updateValue = (value) => (event) => {
    const mapping = {
      'name': setName,
      'tel': setTel,
      'mail': setMail,
      'city': setCity,
    };

    mapping[value](event.target.value);
  };

  const { itemId } = params;
  const isFastDelivery = new URLSearchParams(location.search).get('fd') === 'true';
  const itemsCount = new URLSearchParams(location.search).get('count');
  const fastDeliveryCost = isFastDelivery ? 1000 : 0;
  const item = CATALOG_GOODS.find(({ id }) => id === ~~itemId);
  const itemDeliveryCost = DELIVERY_PRICES[item.deliveryCity];
  const itemPrice = (item.price * itemsCount - item.discount * itemsCount + fastDeliveryCost + itemDeliveryCost)
    .toLocaleString();

  const submitHandler = (event) => {
    event.preventDefault();
    setOrder(true);
    setTimeout(timeoutRedirect, 3999);
  }

  const timeoutRedirect = () => {
    return history.push('/');
  }

  return (
    isOrdered
      ? ( 
        <div className={styles.orderComplete}>
          <svg className={styles.animated} viewBox="0 0 24 24">
            <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" />
          </svg>
          <div>Товар заказан, перенаправление на главную страницу через 3 секунды.</div>
        </div>
      ) : (
        <div className={styles.order}>
          <h1>Оформление заказа</h1>
          <form className={styles.orderForm} onSubmit={submitHandler}>
            <div className={styles.formRow}>
              <label htmlFor="Order_name">Ваше имя</label>
              <input
              placeholder="Представтесь, пожалуйста"
              size="60" maxLength="100" value={name} name="Order[name]" id="Order_name" type="text"
              onChange={updateValue('name')} required
            />
            </div>
            <div className={styles.formRow}>
              <label htmlFor="Order_tel">Телефон</label>
              <input
              placeholder="+7 (___) ___-__-__"
              size="60" maxLength="50" value={tel} name="Order[tel]" id="Order_tel" type="text"
              onChange={updateValue('tel')} required
            />
            </div>
            <div className={styles.formRow}>
              <label htmlFor="Order_mail">E-mail</label>
              <input
              placeholder="Представтесь, пожалуйста"
              size="60" maxLength="100" value={mail} name="Order[mail]" id="Order_mail" type="text"
              onChange={updateValue('mail')}
            />
            </div>
            <div className={styles.formRow}>
              <label htmlFor="Order_city">Город доставки</label>
              <input
              size="60" maxLength="100" value={city} name="Order[city]" id="Order_name" type="text"
              onChange={updateValue('city')} required
            />
            </div>
            <div className={styles.orderInfo}>
              <div className={styles.orderInfoRow}>
                Наименование товара: {item.name} (Артикул: {item.id})
              </div>
              <div className={styles.orderInfoRow}>
                Стоимость: {itemPrice} &#8381; {isFastDelivery && "(С быстрой доставкой)"}
              </div>
              <div className={styles.orderInfoRow}>
                Адрес доставки: {item.deliveryCity} ({itemDeliveryCost === 0 ? 'Бесплатно' : itemDeliveryCost})
              </div>
            </div>
            <div className={styles.formRow}>
              <label htmlFor="Order_online_pay">Способ оплаты</label>
              <select name="Order[online_pay]" id="Order_online_pay">
                <option value="0">Оплата картой</option>
                <option value="1">Оплата наличными при получении заказа</option>
              </select>
            </div>
            <div className={styles.formRow}>
              <label className="label-for-textarea" htmlFor="Order_info">Комментарий</label>
              <textarea
              placeholder="Например, пожелания или Ваши вопросы к нам" rows="5" cols="20" name="Order[info]"
              id="Order_info"
            />
            </div>
            <div className={styles.policy}>
              Оформляя заказ, Вы соглашаетесь с <span>политикой в отношении обработки персональных данных</span>
            </div>
            <div className={styles.buttonWrapper}>
              <input
                className={styles.orderButton} type="submit" name="order" value="Оформить заказ"
              />
            </div>
          </form>
        </div>
      )
  );
};
