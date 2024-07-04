import React, {useState} from 'react';
import styles from './UserInfo.module.scss';

// axios
import axios from 'axios';

// hook
import { getCookie } from '../../../Hooks/getCookie';

// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// redux
import { useDispatch } from 'react-redux';
import { setUpdate } from '../../../Redux/slices/UserSlice';


const UserInfo = ({username, userImage, setNewUsernameModalState}) => {
  const notifySuccess = (e) => toast.success(e);
  const notifyError = (e) => toast.error(e);
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        uploadImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('avatar', file);

    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    };

    const config = {
      headers: headers
    };

    try {
      const response = await axios.post('https://backend.polyctf.ru/api/set_avatar', formData, config);

      if (response.status === 200) {
        notifySuccess('Avatar successfully uploaded');
        dispatch(setUpdate(true));
      } else {
        notifyError('Avatar upload error');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      notifyError('Avatar upload error');
    }
  };

  return (
    <div className={styles.user}>
      <div className={styles.content}>
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          id="avatarInput"
          onChange={handleImageChange}
        />
        <label htmlFor="avatarInput" style={{ cursor: 'pointer' }} className={styles.label}>
          <img
            src={userImage || 'https://via.placeholder.com/150'}
            alt="Avatar"
            className={styles.icon}
          />
        </label>
        <div className={styles.username} onClick={() => setNewUsernameModalState(true)}>{username}</div>
        <div className={styles.contacts}>
          <div className={styles.left}>
            <div className={styles.text}>MY CONTACTS</div>
            <div className={styles.colored}>@{username}</div>
          </div>
          <div className={styles.right}>
            <div className={styles.text}>WITH POLYCTF</div>
            <div className={styles.colored}>None days</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(UserInfo);