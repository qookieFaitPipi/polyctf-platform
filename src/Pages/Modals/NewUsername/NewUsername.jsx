import React, { useEffect, useState } from 'react';
import styles from './NewUsername.module.scss';

// axios
import axios from 'axios';

// hook
import { getCookie } from '../../../Hooks/getCookie';

// react-toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// redux
import { useDispatch } from 'react-redux';
import { setUpdateState } from '../../../Redux/slices/UpdateSlice';

const NewUsername = ({newUsernameModalState, setNewUsernameModalState}) => {
  const [newUsername, setNewUsername] = useState('');
  const notifySuccess = (e) => toast.success(e);
  const notifyError = (e) => toast.error(e);

  const dispatch = useDispatch();

  const sendNewUsername = () => {
    if(newUsername.trim() === '') {
      return;
    }
    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    };
    const config = {
      headers: headers
    };
    const userData = {
      username: newUsername
    };
    
    axios.post("https://backend.polyctf.ru/api/set_username", userData, config)
    .then((res) => {
      if(res.status === 200) {
        setNewUsernameModalState(false);
        notifySuccess('Username successfully changed');
        dispatch(setUpdateState(true));
      } else {
        notifyError('Username change error');
      }
    })
  }

  return (
    <div className={styles.active} onClick={() => setNewUsernameModalState(false)}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <div className={styles.title}>Enter a new username</div>
        <input className={styles.input} value={newUsername} onChange={(e) => setNewUsername(e.target.value)} placeholder='new username' type="text" />
        <input className={styles.button} onClick={sendNewUsername} value="SUBMIT" type="submit" />
      </div>
    </div>
  )
}

export default React.memo(NewUsername);