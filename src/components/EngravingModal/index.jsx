import React, { useState } from 'react';
import styles from './EngravingModal.module.scss';

export const EngravingModal = ({ isOpen, close }) => {
  const [name, setName] = useState('');

  return (
    isOpen &&
      <div
        className={styles.wrapper}>
        <div className={styles.overlay} onClick={close} />
        <div onClick={close} />
        <div className={styles.modal}>
          <div className={styles['modal-header']}>
            <div>Оставить заявку</div>
            <div className={styles.close} onClick={close} />
          </div>
          <form className={styles['modal-form']}>
            <div className={styles.field}>
              <label htmlFor="field-name">Ваше имя</label>
              <input
                id="field-name"
                name="field-name" type="text" placeholder="Как к вам обращаться?" required value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="field-phone">Ваш телефон</label>
              <input
                id="field-phone"
                name="field-phone" type="tel" required value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="+ 7 (___) ___-__-__" pattern={/^\+?[\d,\-()\s]+$/}
              />
            </div>
            <input className={styles['field-button']} type="submit" value="Отправить" />
            <p>Нажимая на кнопку, Вы соглашаетесь с политикой в отношении обработки персональных данных</p>
          </form>
        </div>
      </div>
  );
};
