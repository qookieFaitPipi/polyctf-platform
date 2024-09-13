import React from 'react';
import styles from './Footer.module.scss';

// images
import telegramIcon from './../../../Assets/images/icons/telegram-icon.svg';
import vkIcon from './../../../Assets/images/icons/vk-icon.svg';
import discordIcon from './../../../Assets/images/icons/discord-icon.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.footer} id='scrollContacts'>
      <div className={styles.content}>
        <div className={styles.links}>
          <Link to='https://t.me/polyctf'><img className={styles.icon} src={telegramIcon} alt="tg" /></Link>
          <Link to='https://vk.com/sss_hsc_spbstu'><img className={styles.icon} src={vkIcon} alt="vk" /></Link>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Footer);