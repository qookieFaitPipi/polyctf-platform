import React from 'react';
import styles from './LHeader.module.scss';
import axios from 'axios';

// react-router-dom
import { Link, useNavigate } from 'react-router-dom';

// hooks
import { getCookie } from '../../../Hooks/getCookie';

// images
import logo from './../../../Assets/images/main-logo.png';

const LHeader = ({entryModalState, setEntryModalState}) => {
  const navigate = useNavigate();
  
  const tryLogin = () => {
    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    }
    const config = {
      headers: headers
    };

    axios.get('https://backend.polyctf.ru/api/check', config)
      .then((res) => {
        if(res.status === 200) {
          navigate('/categories')
        }
      })
      .catch((res) => {
        if(res.response.status === 422 || res.response.status === 401) {
          setEntryModalState(!entryModalState);
        }
      })
  }

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
          <Link to='/board' className={styles.navItem} style={{border: 'none'}}>
            BOARD
          </Link>
          {/*
          <Link to='/liveboard' className={styles.navItem} >
            LIVEBOARD
          </Link>
          */}
          <div className={styles.entryBlock} onClick={tryLogin}>
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
