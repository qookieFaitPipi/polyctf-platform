import React from 'react';
import styles from './Register.module.scss';

const Register = ({regModalState, setRegModalState, setEntryModalState}) => {
  return (
    <div className={regModalState ? styles.active : styles.disable} onClick={() => setRegModalState(false)}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <div className={styles.title}>РЕГИСТРАЦИЯ</div>
        <input className={styles.input} placeholder='e-mail' type="text" />
        <input className={styles.input} placeholder='username' type="text" />
        <hr className={styles.regLine}/>
        <input className={styles.input} placeholder='пароль' type="text" />
        <input className={styles.input} placeholder='подтвердите пароль' type="text" />
        <input className={styles.button} tabIndex="1" value='СОЗДАТЬ АККАУНТ' type="submit" />
        <div className={styles.regLink} onClick={() => {setEntryModalState(true) ; setRegModalState(false)}}>Уже есть аккаунт?</div>
      </div>
    </div>
  )
}

export default React.memo(Register);
