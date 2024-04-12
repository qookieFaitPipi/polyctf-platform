import React from 'react';
import styles from './LHeader.module.scss';

// images
import logo from './../../../Assets/images/logo.svg';
import entryIcon from './../../../Assets/images/icons/entry.svg';

const LHeader = ({entryModalState, setEntryModalState}) => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.navItem}>
            Новости
          </div>
          <div className={styles.navItem}>
            Галерея
          </div>
          <div className={styles.navItem} style={{border: 'none'}}>
            Контакты
          </div>
          <div className={styles.entryBlock} onClick={() => setEntryModalState(!entryModalState)}>
            <div className={styles.entry}>
              Войти
            </div>
            <img className={styles.entryIcon} src={entryIcon} alt="entryIcon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(LHeader);
