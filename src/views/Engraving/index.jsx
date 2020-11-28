import React, { useState } from 'react';
import styles from './Engraving.module.scss';
import {EngravingModal} from "../../components/EngravingModal";

export const Engraving = () => {
  const [isModalOpen, setModalState] = useState(false);
  const toggleModal = () => setModalState(!isModalOpen);
  console.log(isModalOpen);

  return (
    <article className={styles.engraving}>
      <h1>Ремонт ювелирных изделий из серебра</h1>
      <div className={styles['content-img']}>
        <img className={styles.pic} src="https://www.kubachiserebro.ru/images/remont_1.jpg" alt="Гравировка" />
        <img className={styles.pic} src="https://www.kubachiserebro.ru/images/remont_2.jpg" alt="Гравировка" />
      </div>
      <p>Мы выполняем все востребованные операции по уходу, обслуживанию и ремонту изделий из серебра:</p>
      <ul>
        <li>восстановление родиевого покрытия, золочения и эмали;</li>
        <li>удаление царапин, пайка сломов и трещин;</li>
        <li>закрепление выпавших вставок и подбор камней на замену (при наличии);</li>
        <li>чистка и полировка изделий;</li>
        <li>восстановление геометрии деформированных предметов;</li>
        <li>изменение размера колец;</li>
        <li>переделка имеющихся аксессуаров, например, оставшейся сережки из пары в кулон.</li>
      </ul>
      <h1>Информация о стоимости</h1>
      <div className={styles['order-button']} onClick={toggleModal}>
        <div className={styles['order-button-text']}>
          Оставить заявку
        </div>
      </div>
      <p>
        <span className={styles.bold}>Ремонт цепочек и браслетов</span>
      </p>
      <table className={styles.simple}>
        <tbody>
          <tr>
            <td>
              <p>
                <span className={styles.bold}>Вид работы</span>
              </p>
            </td>
            <td>
              <p>
                <span className={styles.bold}>Цена</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Пайка</p>
            </td>
            <td>
              <p>От 200 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Пайка полых цепей</p>
            </td>
            <td>
              <p>От 400 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Лазерная пайка</p>
            </td>
            <td>
              <p>От 1200 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Пайка концевика</p>
            </td>
            <td>
              <p>От 450 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Полировка</p>
            </td>
            <td>
              <p>От 150 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Ремонт замка пружины</p>
            </td>
            <td>
              <p>От 250 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Замена замка</p>
            </td>
            <td>
              <p>От 200 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Замена карабина</p>
            </td>
            <td>
              <p>От 400 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Замена штифтов в штампованных или литых браслетах</p>
            </td>
            <td>
              <p>От 1200 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Восстановление гальванических покрытий</p>
            </td>
            <td>
              <p>От 1200 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Шлифовка и полировка (презентационная)</p>
            </td>
            <td>
              <p>От 300 руб.</p>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <p>
        <span className={styles.bold}>Ремонт колец</span>
      </p>
      <table className={styles.simple}>
        <tbody>
          <tr>
            <td>
              <p>
                <span className={styles.bold}>Вид работы</span>
              </p>
            </td>
            <td>
              <p>
                <span className={styles.bold}>Комментарий</span>
              </p>
            </td>
            <td>
              <p>
                <span className={styles.bold}>Серебро</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Ремонт (пайка)</p>
            </td>
            <td>
              <p>(пайка)</p>
            </td>
            <td>
              <p>От 350 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Лазерная пайка</p>
            </td>
            <td>&nbsp;</td>
            <td>
              <p>От 1200 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Реставрация</p>
            </td>
            <td>
              <p>(правка, шлифовка, полировка)</p>
            </td>
            <td>
              <p>От 700 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Закрепка камня</p>
            </td>
            <td>&nbsp;</td>
            <td>
              <p>От 300 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Закрепка драгоценного камня</p>
            </td>
            <td>&nbsp;</td>
            <td>
              <p>От 500 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Восстановление гальванического покрытия</p>
            </td>
            <td>&nbsp;</td>
            <td>
              <p>От 800 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Восстановление гальванического покрытия</p>
            </td>
            <td>
              <p>на отдельных деталях</p>
            </td>
            <td>
              <p>От 500 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Увеличение размера обручального кольца</p>
            </td>
            <td>
              <p>Растяжка, расковка</p>
            </td>
            <td>
              <p>От 300 руб. за размер</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Уменьшение размера обручального кольца</p>
            </td>
            <td>
              <p>запрессовка</p>
            </td>
            <td>
              <p>От 300 руб. за ? размера</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Увеличение размера кольца</p>
            </td>
            <td>&nbsp;</td>
            <td>
              <p>От 600 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Уменьшение размера кольца</p>
            </td>
            <td>&nbsp;</td>
            <td>
              <p>От 500 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Увеличение размера кольца с камнем</p>
            </td>
            <td>&nbsp;</td>
            <td>
              <p>От 900 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Уменьшение размера кольца с камнем</p>
            </td>
            <td>&nbsp;</td>
            <td>
              <p>От 700 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Увеличение размера кольца с драгоценным камнем</p>
            </td>
            <td>&nbsp;</td>
            <td>
              <p>От 1500 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Уменьшение размера кольца с драгоценным камнем</p>
            </td>
            <td>&nbsp;</td>
            <td>
              <p>От 1200 руб.</p>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <p>
        <span className={styles.bold}>Ремонт серег</span>
      </p>
      <table className={styles.simple}>
        <tbody>
          <tr>
            <td>
              <p>
                <span className={styles.bold}>Вид работы</span>
              </p>
            </td>
            <td>
              <p>
                <span className={styles.bold}>Цена</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Ремонт (пайка)</p>
            </td>
            <td>
              <p>От 350 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Лазерная пайка</p>
            </td>
            <td>
              <p>От 1200 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Закрепка камней</p>
            </td>
            <td>
              <p>От 300 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Восстановление гальванического покрытия</p>
            </td>
            <td>
              <p>От 1000 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Восстановление гальванического покрытия отдельной детали</p>
            </td>
            <td>
              <p>От 500 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Ремонт замка</p>
            </td>
            <td>
              <p>От 600 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Замена замка</p>
            </td>
            <td>
              <p>От 1000 руб.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Полировка</p>
            </td>
            <td>
              <p>От 400 руб.</p>
            </td>
          </tr>
        </tbody>
      </table>
      <EngravingModal close={toggleModal} isOpen={isModalOpen} />
    </article>
  );
};
