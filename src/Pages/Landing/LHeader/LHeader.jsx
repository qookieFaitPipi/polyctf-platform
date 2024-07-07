import React from 'react';
import styles from './LHeader.module.scss';

// images
import logo from './../../../Assets/images/main-logo.png';

const LHeader = ({entryModalState, setEntryModalState}) => {
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
          {/*
          <Link to='/liveboard' className={styles.navItem} >
            LIVEBOARD
          </Link>
          */}
          <div className={styles.entryBlock} onClick={() => setEntryModalState(!entryModalState)}>
            <div className={styles.entry}>
              ВОЙТИ
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(LHeader);
