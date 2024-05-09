import React from 'react';
import styles from './LHeader.module.scss';

// images
import logo from './../../../Assets/images/logo.svg';
import entryIcon from './../../../Assets/images/icons/entry.svg';

const LHeader = ({authModalState, setAuthModalState}) => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.navItem} onClick={() => window.scrollTo({ top: document.getElementById('scrollNews').offsetTop - 120, behavior: 'smooth'})}>
            НОВОСТИ
          </div>
          <div className={styles.navItem} onClick={() => window.scrollTo({ top: document.getElementById('scrollGallery').offsetTop - 120, behavior: 'smooth'})}>
            ГАЛЕРЕЯ 
          </div>
          <div className={styles.navItem} style={{border: 'none'}} onClick={() => window.scrollTo({ top: document.getElementById('scrollContacts').offsetTop - 120, behavior: 'smooth'})}>
            КОНТАКТЫ
          </div>
          <div className={styles.entryBlock} onClick={() => setAuthModalState(!authModalState)}>
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
