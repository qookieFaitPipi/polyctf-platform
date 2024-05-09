import React from 'react';
import styles from './Footer.module.scss';

// images
import telegramIcon from './../../../Assets/images/icons/telegram-icon.svg';
import vkIcon from './../../../Assets/images/icons/vk-icon.svg';
import discordIcon from './../../../Assets/images/icons/discord-icon.svg';

const Footer = () => {
  return (
    <div className={styles.footer} id='scrollContacts'>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.title}>
            Контакты
          </div>
          <div className={styles.links}>
            <img className={styles.icon} src={telegramIcon} alt="" />
            <img className={styles.icon} src={vkIcon} alt="" />
            <img className={styles.icon} src={discordIcon} alt="" />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.text}>
            Я вообще не зна что тут писать, сделаю примерно по обЪему так же, как в примере в который мне скинули
            Я вообще не зна что тут писать, сделаю примерно по
            обЪему так же, как в примере в который мне скинули
            Я вообще не зна что тут писать, сделаю примерно по обЪему так же, как в примере в который
            спасибо
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Footer);